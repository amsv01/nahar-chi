import { compose } from 'recompose';
import { connect } from 'react-redux';

const mapStateToProps = state => {
	return {
		todos: getVisibleTodos(state.todos, state.visibilityFilter)
	};
};​

const AddMealContainer = compose(
	connect(mapStateToProps)
);

export default AddMealContainer;