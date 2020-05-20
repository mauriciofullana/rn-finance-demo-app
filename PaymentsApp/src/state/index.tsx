import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import authReducer from './auth/reducers';

const reducers = combineReducers({
	auth: authReducer
});

// Export reducers return type to use in selectors
export type RootState = ReturnType<typeof reducers>;

const middleware = applyMiddleware(thunk);

export default createStore(reducers, middleware);
