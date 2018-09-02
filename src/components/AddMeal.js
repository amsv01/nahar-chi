import React from 'react';
import PropTypes from 'prop-types';

const AddMeal = ({ save, value }) => (
    <form onSubmit={save}>
        <label htmlFor="mealName">اسم غذا:</label>
        <input name='mealName' value={value}/>
    </form>
);

AddMeal.propTypes = {
  save: PropTypes.func,
};

export default AddMeal;