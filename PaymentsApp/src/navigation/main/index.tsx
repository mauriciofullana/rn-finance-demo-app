import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch } from 'react-redux';

import { logout } from '../../state/auth/actions';
import HomeScreen from '../../screens/home/HomeScreen';
import MovementsScreen from '../../screens/movements/MovementsScreen';

import ChargeNavigator from '../charge/index';

import { MainStackParamList, HomeScreenNavigationProp } from './types';
import { screenHeaderOptions } from '../CommonHeaderOption';
import { Colors } from '../../styles';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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
						headerTransparent: true,
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
				name="Charge"
				component={ChargeNavigator}
				options={{
					title:"Cobros Activos",
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
		</MainStack.Navigator>
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

export default MainStackkNavigator;
