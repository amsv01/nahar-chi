import { compose } from 'recompose';
import { connect } from 'react-redux';
import { addMeal } from '../modules/meals';
import AddMeal from './AddMeal';

const mapDispatchToProps = dispatch => ({
    save: e => {
    	e.preventDefault();
        dispatch(addMeal(e.target.mealName.value));
        e.target.mealName.value = '';
	}
});

const AddMealContainer = compose(
	connect(null, mapDispatchToProps)
)(AddMeal);

export default AddMealContainer;