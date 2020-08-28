import React, { FunctionComponent } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { authSelector } from '../state/selectors';
import AuthStackNavigator from './auth';
import PrivateDrawerNavigator from './PrivateDrawer';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Navigator: FunctionComponent = () => {
	const { isSignedIn } = useSelector(authSelector);

	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					header: () => null,
				}}
			>
				{!isSignedIn && (
					<Stack.Screen name="Public" component={AuthStackNavigator} />
				)}
				{isSignedIn && (
					<Stack.Screen name="Private" component={PrivateDrawerNavigator} />
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigator;
