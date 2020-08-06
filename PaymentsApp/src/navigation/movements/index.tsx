import React, { FunctionComponent } from 'react';
import { StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { MovementsStackParamList } from './types';
import MovementsScreen from '../../screens/movements/MovementsScreen';
import { Colors } from '../../styles';
import { PrivateDrawerNavigationProp } from '../types';
import { screenHeaderOptions } from '../Common/CommonHeaderOption';

const MovementsStack = createStackNavigator<MovementsStackParamList>();

const MovementsStackNavigator: FunctionComponent = () => {
	const navigation = useNavigation<PrivateDrawerNavigationProp>();

	return (
		<MovementsStack.Navigator
			initialRouteName="Movements"
			screenOptions={{
				headerBackTitleVisible: false,
				headerTitleAlign: 'center',
				headerStyle: {
					elevation: Platform.OS === 'ios' ? 0 : 4,
					shadowOpacity: Platform.OS === 'ios' ? 0 : 4,
					borderBottomWidth: 0,
					backgroundColor: Colors.screenBackground,
				},
				headerTintColor: Colors.lightGray,
			}}
		>
			<MovementsStack.Screen
				name="Movements"
				component={MovementsScreen}
				options={() => screenHeaderOptions({ title: 'Movimientos' })}
			/>
		</MovementsStack.Navigator>
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

export default MovementsStackNavigator;
