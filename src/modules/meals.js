import { createAction } from 'redux-actions';

const ADD_MEAL = '@ask/add';

const addMeal = createAction(ADD_MEAL);

export const meals = (state = {}, action) => {
	switch (action.type) {
		case ADD_MEAL:
			return Object.assign(state, action.payload);
		default:
			return state;
	}
};
