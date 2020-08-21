import React, { FunctionComponent } from 'react';
import { StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { MovementsStackParamList } from './types';
import MovementsScreen from '../../screens/movements/MovementsScreen';
import { Colors } from '../../styles';
import { PrivateDrawerNavigationProp } from '../types';
import {
	ScreenHeaderCommonOptions,
	StackCommonOptions,
} from '../Common/CommonHeaderOption';

const MovementsStack = createStackNavigator<MovementsStackParamList>();

const MovementsStackNavigator: FunctionComponent = () => {
	const navigation = useNavigation<PrivateDrawerNavigationProp>();

	return (
		<MovementsStack.Navigator
			initialRouteName="Movements"
			screenOptions={StackCommonOptions()}
		>
			<MovementsStack.Screen
				name="Movements"
				component={MovementsScreen}
				options={() => ScreenHeaderCommonOptions({ title: 'Movimientos' })}
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
