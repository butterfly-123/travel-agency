import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import { Grid, Row, Col } from 'react-flexbox-grid';
import PageTitle from '../../common/PageTitle/PageTitle';

class OrderForm extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <PageTitle text='Trip options' />
            <OrderSummary />
          </Col>
        </Row>
      </Grid>
    );
  }
}
export default OrderForm;
