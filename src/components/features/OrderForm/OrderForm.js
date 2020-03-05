import React from 'react';
import PropTypes from 'prop-types';
import OrderSummary from '../OrderSummary/OrderSummary';
import { Grid, Row, Col } from 'react-flexbox-grid';

class OrderForm extends React.Component {

  static propTypes = {
    tripCost: PropTypes.node,
    options: PropTypes.node,
  }

  render() {
    const {tripCost, options} = this.props;
    
    console.log(this.props);

    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <OrderSummary tripCost={tripCost} options={options} />
          </Col>
        </Row>
      </Grid>
    );
  }
}
export default OrderForm;
