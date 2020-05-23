import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch } from 'react-redux';

import { logout } from '../../state/auth/actions';
import HomeScreen from '../../screens/home/HomeScreen';
import MovementsScreen from '../../screens/movements/MovementsScreen';
import { MainStackParamList, HomeScreenNavigationProp } from './types';
import { screenHeaderOptions } from '../CommonHeaderOption';
import { Colors } from '../../styles';
import { Platform } from 'react-native';

const MainStack = createStackNavigator<MainStackParamList>();

const MainStackkNavigator: FunctionComponent = () => {
	const dispatch = useDispatch();

	const logOut = () => {
		dispatch(logout());
	};

	return (
		<MainStack.Navigator initialRouteName="Home">
			<MainStack.Screen
				name="Home"
				component={HomeScreen}
				options={screenHeaderOptions(logOut)}
			/>
			<MainStack.Screen
				name="Movements"
				component={MovementsScreen}
				options={{
					title:"Movimientos",
					headerTintColor: 'white',
					headerStyle: {
						backgroundColor: Colors.screenBackground,
					},
					headerTitleStyle: {
						fontSize: 18
					}
				}}
			/>
		</MainStack.Navigator>
	);
};

export default MainStackkNavigator;
