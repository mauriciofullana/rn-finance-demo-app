import React, { FunctionComponent } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeStackParamList } from './types';
import { Colors } from '../../styles';
import HomeScreen from '../../screens/home/HomeScreen';
import SettingsScreen from '../../screens/settings/SettingsScreen';
import MovementsScreen from '../../screens/movements/MovementsScreen';
import { ScreenHeaderCommonOptions } from '../Common/CommonHeaderOption';

const HomeStack = createStackNavigator<HomeStackParamList>();

const HomeStackNavigator: FunctionComponent = () => {
	return (
		<HomeStack.Navigator
			initialRouteName="Home"
			screenOptions={{
				headerStyle: {
					backgroundColor: Colors.screenBackground,
				},
				headerTintColor: Colors.white,
			}}
		>
			<HomeStack.Screen
				name="Home"
				component={HomeScreen}
				options={() =>
					ScreenHeaderCommonOptions({
						title: '',
						props: {
							headerStyle: {
								elevation: 0,
								shadowOpacity: 0,
								borderBottomWidth: 0,
								backgroundColor: Colors.screenBackground,
							},
						},
					})
				}
			/>
			<HomeStack.Screen name="Settings" component={SettingsScreen} />
			<HomeStack.Screen name="Movements" component={MovementsScreen} />
		</HomeStack.Navigator>
	);
};

const styles = StyleSheet.create({
	hederMenuIcon: {
		color: Colors.lightGray,
	},
	headerIconContainer: {
		marginHorizontal: 15,
	},
	headerTitle: {
		alignItems: 'center',
	},
});

export default HomeStackNavigator;
