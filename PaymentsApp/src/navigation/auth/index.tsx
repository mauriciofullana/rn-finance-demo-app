import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../../screens/auth/LoginScreen';
import ForgotScreen from '../../screens/auth/ForgotScreen';
import { AuthStackParamList } from './types';

const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthStackNavigator: FunctionComponent = () => {
	return (
		<AuthStack.Navigator
			initialRouteName="Login"
			screenOptions={{
                headerTransparent: true,
                headerTitle: () => null
			}}
		>
            <AuthStack.Screen
                name="Login"
                component={LoginScreen}
            />
            <AuthStack.Screen
                name="Forgot"
                component={ForgotScreen}
            />
        </AuthStack.Navigator>
	);
};

export default AuthStackNavigator;
