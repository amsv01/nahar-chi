import { compose } from 'recompose';
import { connect } from 'react-redux';

const mapStateToProps = state => {
	return {};
};​

const AddMealContainer = compose(
	connect(mapStateToProps)
);

export default AddMealContainer;