import React from 'react';
import { Provider } from 'react-redux';

import store from './src/state';
import Navigator from './src/navigation';
import CommonResult from './src/components/CommonResult';
import Spinner from './src/components/Spinner';

export default function App() {
	return (
		<Provider store={store}>
			<Spinner />
			<CommonResult />
			<Navigator />
		</Provider>
	);
}
