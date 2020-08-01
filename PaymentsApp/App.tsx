import React from 'react';
import { Provider } from 'react-redux';

import store from './src/state';
import Navigator from './src/navigation';
import CommonError from './src/components/CommonError';
import Spinner from './src/components/Spinner';

export default function App() {
	return (
		<Provider store={store}>
			<Spinner />
			<CommonError />
			<Navigator />
		</Provider>
	);
}
