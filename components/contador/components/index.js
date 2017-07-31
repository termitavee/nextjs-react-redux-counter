import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { increment, decrement, init } from '../actions';
import actions from '../actions';
import Main from './Main';

function mapStateToProps({ value }) {
	return { value };
}

function mapDispatchToProps(dispatch) {

	const actionCreators = { increment, decrement, init }
	return bindActionCreators(actionCreators, dispatch);
}

const Counter = connect(mapStateToProps, mapDispatchToProps)(Main);

export default Counter;
