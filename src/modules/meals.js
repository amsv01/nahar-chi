import { createAction } from 'redux-actions';

export const ADD_MEAL = '@ask/meal/add';
export const REMOVE_MEAL = '@ask/meal/remove';
export const REHYDRATE_MEAL = '@ask/meal/rehydrate';

export const addMeal = createAction(ADD_MEAL, name => ({name}));
export const removeMeal = createAction(REMOVE_MEAL);
export const rehydrateMeal = createAction(REHYDRATE_MEAL);

export const meals = (state = [], {type, payload}) => {
	switch (type) {
		case ADD_MEAL:
			return state.concat([payload]);
		case REMOVE_MEAL:
			return state.splice(payload, 0);
		case REHYDRATE_MEAL:
			return payload;
		default:
			return state;
	}
};
