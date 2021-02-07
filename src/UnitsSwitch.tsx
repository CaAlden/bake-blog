import { css } from '@emotion/css';
import * as React from 'react';
import { Units } from '../types';
import { Colors } from './utils/Colors';
import { useUnits } from './context';

const unitOptionButton = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  outline: 'none',
  background: 'inherit',
  padding: '5px',
  width: '30px',
  height: '30px',
  margin: 0,
  border: 'none',
  color: '#fff',
  cursor: 'pointer',
  borderRadius: "100%",
}

const unselectedButton = css(unitOptionButton);
const selectedButton = css({
  ...unitOptionButton,
  background: '#fff',
  color: '#000',
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
