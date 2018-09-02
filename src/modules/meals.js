import { createAction } from 'redux-actions';

export const ADD_MEAL = '@ask/add';
export const REMOVE_MEAL = '@ask/remove';

export const addMeal = createAction(ADD_MEAL, name => ({name}));
export const removeMeal = createAction(REMOVE_MEAL);

export const meals = (state = [], action) => {
	switch (action.type) {
		case ADD_MEAL:
			return state.concat([action.payload]);
		case REMOVE_MEAL:
			return state.splice(action.payload, 0);
		default:
			return state;
	}
};
