import { connect } from 'react-redux';
import OrderForm from './OrderForm.js';
import { setOrderOption } from '../../../redux/orderRedux';

const mapStateToProps = (state) => ({
  options: setOrderOption(state),
});

export default connect(mapStateToProps)(OrderForm);