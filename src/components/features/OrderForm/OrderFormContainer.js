import { connect } from 'react-redux';
import OrderFormContainer from './OrderFormContainer.js';
import { getOrderOptions } from '../../../redux/orderRedux';

const mapStateToProps = (state, props) => ({
  order: getOrderOptions(state, props.options),
});

export default connect(mapStateToProps)(OrderFormContainer);