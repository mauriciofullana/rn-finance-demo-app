import React from 'react';
import { Provider } from 'react-redux';

import store from './src/state';
import Navigator from './src/navigation';

export default function App() {
	return <Provider store={store}>
		<Navigator />
	</Provider>
}
