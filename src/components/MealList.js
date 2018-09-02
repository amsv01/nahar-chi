import React from 'react';
import PropTypes from 'prop-types';

const MealList = ({meals, remove}) => (
    <ul>
        {
            meals.map((m, idx) =>
                <li key={`meal-${idx}`}>
                    <span>{m.name}</span>
                    <button onClick={remove(idx)}>X</button>
                </li>
            )
        }
    </ul>
);

MealList.propTypes = {
    meals: PropTypes.array,
    remove: PropTypes.func,
};

export default MealList;