import React from 'react';
import './App.css';
import AddMeal from './components/AddMealContainer';
import MealList from './components/MealListContainer';

const App = () => (
    <div className="App">
		<AddMeal />
		<MealList />
	</div>
);

export default App;