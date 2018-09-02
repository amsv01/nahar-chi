import { connect } from 'react-redux';
import { compose } from 'recompose';
import MealList from './MealList';
import { removeMeal } from '../modules/meals';

const mapStateToProps = state => ({
    meals: state.meals,
});

const mapDispatchToProps = dispatch => ({
    remove: index => e => {
        e.preventDefault();
        console.log(e, index);
        dispatch(removeMeal(index));
    },
});

const MealListContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
)(MealList);

export default MealListContainer;