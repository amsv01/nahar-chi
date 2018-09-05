import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import singleStore from './store';
import { save } from './db';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

singleStore.subscribe(() => {
	save(singleStore.getState());
});

ReactDOM.render(
	<Provider store={singleStore}>
		<App />
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();
