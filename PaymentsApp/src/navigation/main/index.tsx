import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch } from 'react-redux';

import { logout } from '../../state/auth/actions';
import HomeScreen from '../../screens/home/HomeScreen';
import { MainStackParamList, HomeScreenNavigationProp } from './types';
import { screenHeaderOptions } from '../CommonHeaderOption';

const MainStack = createStackNavigator<MainStackParamList>();

const MainStackkNavigator: FunctionComponent = () => {
	const dispatch = useDispatch();

	const logOut = () => {
		dispatch(logout());
	};


	return (
		<MainStack.Navigator
			initialRouteName="Home"
			screenOptions={screenHeaderOptions(logOut)}
		>
			<MainStack.Screen name="Home" component={HomeScreen} />
		</MainStack.Navigator>
	);
};

export default MainStackkNavigator;
