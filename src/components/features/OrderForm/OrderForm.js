import React from 'react';
import PropTypes from 'prop-types';
import OrderSummary from '../OrderSummary/OrderSummary';
import { Grid, Row, Col } from 'react-flexbox-grid';

class OrderForm extends React.Component {

  static propTypes = {
    tripCost: PropTypes.node,
  }

  render() {
    const {tripCost} = this.props;
    
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <OrderSummary tripCost={tripCost} />
          </Col>
        </Row>
      </Grid>
    );
  }
}
export default OrderForm;
