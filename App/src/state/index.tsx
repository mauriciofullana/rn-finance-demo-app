import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import authReducer from './auth/reducers';
import movementsReducer from './movements/reducers';
import errorReducer from './common/reducers';
import productsReducer from './products/reducers';

const reducers = combineReducers({
	auth: authReducer,
	common: errorReducer,
	movements: movementsReducer,
	products: productsReducer,
});

// Export reducers return type to use in selectors
export type RootState = ReturnType<typeof reducers>;

const middleware = applyMiddleware(thunk);

export default createStore(reducers, middleware);
