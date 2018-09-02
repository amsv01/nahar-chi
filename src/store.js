import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './modules/index';
import middleware from './middleware/index';

const singleStore = createStore(
    reducer,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default singleStore;