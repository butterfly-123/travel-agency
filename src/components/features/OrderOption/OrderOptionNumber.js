import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

// setOptionValue={value => setOrderOption({ [id]: value })}
// aneta={0}



// <OptionComponent
//   {...otherProps}
//   setOptionValue={value => setOrderOption({ [id]: value })}
//   aneta={0}

// />

// const params = {
//   {...otherProps}
//   setOptionValue: {value => setOrderOption({ [id]: value })},
//   aneta: 0
// };

// OrderOptionNumber(params,);

const OrderOptionNumber = ({limits, currentValue, setOptionValue}) => (
  <div className={styles.number}>
    <input type='number'
      className={styles.inputSmall}
      value={currentValue}
      min={limits.min}
      max={limits.max}
      onChange={event => setOptionValue(event.currentTarget.value)}
    ></input>
  </div>
);

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.number,
  setOptionValue: PropTypes.func,
  limits: PropTypes.object,
};

export default OrderOptionNumber;