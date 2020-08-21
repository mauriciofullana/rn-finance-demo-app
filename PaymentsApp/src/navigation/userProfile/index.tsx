import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { UserProfileStackParamList } from './types';
import UserProfileScreen from '../../screens/profile/UserProfileScreen';
import {
	ScreenHeaderCommonOptions,
	StackCommonOptions,
} from '../Common/CommonHeaderOption';

const UserProfileStack = createStackNavigator<UserProfileStackParamList>();

const UserProfileStackNavigator: FunctionComponent = () => {
	return (
		<UserProfileStack.Navigator
			initialRouteName="UserProfile"
			screenOptions={StackCommonOptions()}
		>
			<UserProfileStack.Screen
				name="UserProfile"
				component={UserProfileScreen}
				options={() => ScreenHeaderCommonOptions({ title: 'Datos Personales' })}
			/>
		</UserProfileStack.Navigator>
	);
};

export default UserProfileStackNavigator;
