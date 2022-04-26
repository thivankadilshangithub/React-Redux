import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import { compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducess/index';

const middleware = [thunk];
const initialState = {};

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;




