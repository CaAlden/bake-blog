import { getOrElse } from 'fp-ts/lib/Either';
import * as t from 'io-ts';
import { left } from 'fp-ts/lib/Either';
import { PathReporter } from 'io-ts/PathReporter';
import { useEffect } from 'react';
import { Units } from '../../types';
import { useLocalStorageValue } from './storage';

export interface IPreferences {
  units: Units;
}

const preferencesCodec: t.Type<IPreferences> = t.type({
  units: t.keyof({
    [Units.Metric]: null,
    [Units.Imperial]: null,
  }),
});

const getConfigWithDefault = getOrElse<t.Errors, IPreferences>((x) => {
  console.warn(PathReporter.report(left(x)));
  return ({
    units: Units.Metric,
  });
});

export interface IConfigContext {
  config: IPreferences;
  setConfig: (p: IPreferences) => void;
}

const CONFIGURATION_STORAGE_KEY = 'CONFIGURATION';
export const useConfigContext = () => {
  const { value, setValue } = useLocalStorageValue(CONFIGURATION_STORAGE_KEY);
  const storedConfig = JSON.parse(value ?? '{}');
  const config = getConfigWithDefault(preferencesCodec.decode(storedConfig));

  const setConfig = (newConfig: IPreferences) => {
    setValue(JSON.stringify(newConfig));
  };

  return { config, setConfig };
};
