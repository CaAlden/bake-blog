import { css } from '@emotion/css';
import * as React from 'react';
import { Units } from '../types';
import { useUnits } from './utils/config';

const unitOptionButton = {
  outline: 'none',
  background: 'inherit',
  padding: '5px',
  margin: 0,
  border: 'none',
  color: '#fff',
  cursor: 'pointer',
}

const unselectedButton = css(unitOptionButton);
const selectedButton = css({
  ...unitOptionButton,
  fontWeight: 'bold',
});

const optionContainer = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const UnitsSwitch = () => {
  const [units, setUnits] = useUnits();
  return (
    <div className={optionContainer}>
      <button
        className={units === Units.Metric ? unselectedButton : selectedButton}
        disabled={units === Units.Imperial}
        onClick={() => setUnits(Units.Imperial)}
      >
        F°
      </button>
      <button
        className={units === Units.Imperial ? unselectedButton : selectedButton}
        disabled={units === Units.Metric}
        onClick={() => setUnits(Units.Metric)}
      >
        C°
      </button>
    </div>
  );
};

export default UnitsSwitch;
