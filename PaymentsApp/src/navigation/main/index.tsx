import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch } from 'react-redux';

import { logout } from '../../state/auth/actions';
import HomeScreen from '../../screens/home/HomeScreen';
import MovementsScreen from '../../screens/movements/MovementsScreen';
import ChargeListScreen from '../../screens/charge/ChargeListScreen';
import ChargeScreen from '../../screens/charge/ChargeScreen';

import { MainStackParamList } from './types';
import { Colors } from '../../styles';
import { TouchableOpacity, StyleSheet } from 'react-native';
import {
	MaterialCommunityIcons,
	MaterialIcons,
	Ionicons,
} from '@expo/vector-icons';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeStackNavigator from '../home';
import MovementsStackNavigator from '../movements';
import ChargesStackNavigator from '../charge';

const Tab = createMaterialBottomTabNavigator<MainStackParamList>();

const MainStack = createStackNavigator<MainStackParamList>();

const MainTabNavigator: FunctionComponent = () => {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			labeled={true}
			shifting={false}
			activeColor={Colors.main}
			inactiveColor={Colors.white}
			barStyle={{
				backgroundColor: Colors.darkestGray,
				paddingVertical: 5,
			}}
		>
			<Tab.Screen
				name="Home"
				component={HomeStackNavigator}
				options={{
					tabBarLabel: 'Inicio',
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name="home" color={color} size={26} />
					),
				}}
			/>
			<Tab.Screen
				name="ChargeList"
				component={ChargesStackNavigator}
				options={{
					tabBarLabel: 'Cobrar',
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name="qrcode" color={color} size={26} />
					),
				}}
			/>
			<Tab.Screen
				name="Pay"
				component={ChargesStackNavigator}
				options={{
					tabBarLabel: 'Pagar',
					tabBarIcon: ({ color }) => (
						<MaterialIcons name="attach-money" color={color} size={26} />
					),
				}}
			/>
			<Tab.Screen
				name="Movements"
				component={MovementsStackNavigator}
				options={{
					tabBarLabel: 'Historial',
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons
							name="format-list-bulleted"
							color={color}
							size={26}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
};

const styles = StyleSheet.create({
	hederMenuIcon: {
		color: '#d6d6d6',
	},
	headerIconContainer: {
		marginHorizontal: 15,
	},
	headerTitle: {
		alignItems: 'center',
	},
	img: {
		width: 110,
		height: 32,
	},
});

export default MainTabNavigator;
