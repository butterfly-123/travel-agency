import React from 'react';
import PropTypes from 'prop-types';
import OrderSummary from '../OrderSummary/OrderSummary';
import { Grid, Row, Col } from 'react-flexbox-grid';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';

class OrderForm extends React.Component {

  static propTypes = {
    tripCost: PropTypes.string,
    options: PropTypes.object,
    setOrderOption: PropTypes.func,
  }

  render() {
    const {tripCost, options, setOrderOption} = this.props;
    
    console.log(this.props);

    return (
      <Grid>
        <Row>
          {pricing.map(option => (
            <Col key={option.id} md={4}>
              <OrderOption {...option} currentValue={options[option.id]} setOrderOption={setOrderOption} />
            </Col>
          ))}
          <Col xs={12}>
            <OrderSummary tripCost={tripCost} options={options} />
          </Col>
        </Row>
      </Grid>
    );
  }
}
export default OrderForm;
