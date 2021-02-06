import { getOrElse } from 'fp-ts/lib/Either';
import * as t from 'io-ts';
import { left } from 'fp-ts/lib/Either';
import { PathReporter } from 'io-ts/PathReporter';
import { useCallback, useMemo } from 'react';
import { Units } from '../../types';
import { useLocalStorageValue } from './storage';

interface IPreferences {
  units: Units;
}

const preferencesCodec: t.Type<IPreferences> = t.type({
  units: t.keyof({
    [Units.Metric]: null,
    [Units.Imperial]: null,
  }),
});

const getConfigWithDefault = getOrElse<t.Errors, IPreferences>((x) => {
  console.log(PathReporter.report(left(x)));
  return ({
    units: Units.Metric,
  });
});

const CONFIGURATION_STORAGE_KEY = 'CONFIGURATION';
export const useConfig = () => {
  const { value, setValue } = useLocalStorageValue(CONFIGURATION_STORAGE_KEY);
  const config = useMemo(() => {
    const storedConfig = JSON.parse(value ?? '{}');
    return getConfigWithDefault(preferencesCodec.decode(storedConfig));
  }, [value]);

  const setConfig = useCallback((newConfig: IPreferences) => {
    setValue(JSON.stringify(newConfig));
  }, [setValue]);

  return [config, setConfig] as const;
};

export const useUnits = () => {
  const [config, setConfig] = useConfig();
  const units = config.units;
  const setUnits = useCallback((units: Units) => {
    setConfig({
      ...config,
      units,
    });
  }, [setConfig, config])
  return [units, setUnits] as const;
};
