import { DECREMENT_COUNTER, INCREMENT_COUNTER, INIT_COUNTER } from './actions';
import { Map } from 'immutable'
function variation(state = { value: 0, increment: 1 }, action) {

	switch (action.type) {
		case INCREMENT_COUNTER:

			return Map(state)
				.set('value', state.value + state.increment)
				.toJSON();
			

		case DECREMENT_COUNTER:
		
			return Map(state)
				.set('value', state.value - state.increment)
				.toJSON();

		// return {
		// 	...state,
		// 	value: state.value - state.increment
		// }

		case INIT_COUNTER:

			return Map().withMutations(map => {

				map.set('value', action.value)
					.set('increment', action.increment)

			}).toJSON();

		// return {
		// 	value: action.value,
		// 	increment: action.increment
		// }

		default:
			return state;
	}

}

export default variation;