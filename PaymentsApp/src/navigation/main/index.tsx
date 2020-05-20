import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../../screens/home/HomeScreen';
import { MainStackParamList } from './types';

const MainStack = createStackNavigator<MainStackParamList>();

const AuthStackNavigator: FunctionComponent = () => {
	return (
		<MainStack.Navigator
			initialRouteName="Home"
			screenOptions={{
                headerTransparent: true,
                headerTitle: () => null
			}}
		>
            <MainStack.Screen
                name="Home"
                component={HomeScreen}
            />
        </MainStack.Navigator>
	);
};

export default AuthStackNavigator;
