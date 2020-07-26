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
	FontAwesome,
	Ionicons
} from '@expo/vector-icons';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeStackNavigator from '../home';
import MovementsStackNavigator from '../movements';
import ChargesStackNavigator from '../charge';

const Tab = createMaterialBottomTabNavigator<MainStackParamList>();

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
				options={() => {
					return {
						title: "Inicio",
						headerTransparent: false,
						headerStyle: {
							backgroundColor: Colors.screenBackground,
							shadowColor: 'transparent',
							elevation: 0
						},
						headerTitle: () => null,
						headerRight: () => {
							return (
								<TouchableOpacity
									style={styles.headerIconContainer}
									onPress={() => logOut()}
								>
									<Ionicons style={styles.hederMenuIcon} name="ios-log-out" size={28} />
								</TouchableOpacity>
							);
						},
						headerLeft: () => {
							return (
								<TouchableOpacity
									style={styles.headerIconContainer}
									onPress={()=>{}}
								>
									<Ionicons style={styles.hederMenuIcon} name="ios-settings" size={28} />
								</TouchableOpacity>
							);
						}
					}
				}}
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
			<MainStack.Screen
				name="ChargeList"
				component={ChargeListScreen}
				options={{
					title:"Cobros activos",
					headerTintColor: 'white',
					headerStyle: {
						backgroundColor: Colors.screenBackground,
					},
					headerTitleStyle: {
						fontSize: 18
					},
					headerRight: () => {
                        return (
                            <TouchableOpacity
                                style={styles.headerIconContainer}
                            >
                                <Ionicons style={styles.hederMenuIcon} name="md-add" size={28} />
                            </TouchableOpacity>
                        );
					}
				}}
			/>
			<MainStack.Screen
				name="Charge"
				component={ChargeScreen}
				options={{
					title:"",
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
				paddingVertical: 10
				
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
				component={ChargeListScreen} 
				options={{
					tabBarLabel: 'Pagar',
					tabBarIcon: ({ color }) => (
					  <MaterialIcons name="attach-money" color={color} size={26} />
					)
				}}
			/>
			<Tab.Screen 
				name="Movements" 
				component={MovementsStackNavigator} 
				options={{
					tabBarLabel: 'Historial',
					tabBarIcon: ({ color }) => (
					  <MaterialCommunityIcons name="format-list-bulleted" color={color} size={26} />
					),
				}}
			/>
		</Tab.Navigator>
	  );
};

const styles = StyleSheet.create({
	hederMenuIcon: {
		color: "#d6d6d6"
	},
	headerIconContainer: {
		marginHorizontal: 15
	},
	headerTitle: {
		alignItems: 'center'
	},
	img: {
		width: 110,
		height: 32
	}
});

export default MainTabNavigator;
