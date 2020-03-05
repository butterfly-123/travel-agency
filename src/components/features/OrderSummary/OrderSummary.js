import React from 'react';
import styles from './OrderSummary.scss';
import PropTypes from 'prop-types';

class OrderSummary extends React.Component {
  static propTypes = {
    tripCost: PropTypes.func,
  }

  render() {
    const {tripCost} = this.props;

    return (
      <h2 className={styles.component}>
        Total:
        <strong> ${tripCost} </strong>
      </h2>
    );
  }
}
export default OrderSummary;