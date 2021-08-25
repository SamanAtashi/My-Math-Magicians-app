import React, { useState } from 'react';
import Calculate from '../logic/calculate';
import './Calculator.css';

const Calculator = () => {
  const [state, upState] = useState({
    total: null,
    next: null,
    operation: null,
    display: 0,
  });

  const calcButton = (e) => {
    const btnName = e.target.innerHTML;
    const { total, next } = Calculate(state, btnName);

    if (btnName === 'AC') {
      upState({ ...state, display: 0, ...Calculate(state, btnName) });
    } else if (btnName === '=') {
      upState({ ...state, display: total, ...Calculate(state, btnName) });
    } else if (btnName === '+/-') {
      upState({ ...state, display: next || total, ...Calculate(state, btnName) });
    } else {
      // eslint-disable-next-line max-len
      upState((curr) => ({ ...state, display: (curr.total || '') + (curr.operation || '') + btnName, ...Calculate(state, btnName) }));
    }
  };

  const list = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'AC',
    '+/-',
    '%',
    '÷',
    '.',
    'x',
    '+',
    '-',
    '=',
    '0',
  ];

  const listItem = list.map((item, index) => (
    <li
      key={item.toString()}
      className={`calc-item o-${index + 1}`}
    >
      <button type="button" onClick={calcButton}>
        {item}
      </button>
    </li>
  ));

  return (
    <ul className="d-flex calc">
      <li className="calc-result d-flex o-0">{state.display}</li>
      {listItem}
    </ul>
  );
};
export default Calculator;
