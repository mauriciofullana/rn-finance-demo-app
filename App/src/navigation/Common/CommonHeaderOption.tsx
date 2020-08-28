import React from 'react';
import { TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Colors } from '../../styles';
import { PrivateDrawerNavigationProp } from '../types';
import { StackNavigationOptions } from '@react-navigation/stack';

interface IScreenHeaderOptionsProps {
	title: string;
	props?: {};
}

export const ScreenHeaderCommonOptions = ({
	title,
	props,
}: IScreenHeaderOptionsProps) => {
	const navigation = useNavigation<PrivateDrawerNavigationProp>();

	return {
		...props,
		headerTitle: title,
		headerTransparent: false,
		headerTitleStyle: {
			fontSize: 18,
		},
		headerLeft: () => {
			return (
				<TouchableOpacity
					style={styles.headerIconContainer}
					onPress={() => navigation.openDrawer()}
				>
					<Ionicons style={styles.hederMenuIcon} name="md-menu" size={28} />
				</TouchableOpacity>
			);
		},
	};
};

export const StackCommonOptions = (): StackNavigationOptions => {
	return {
		headerBackTitleVisible: false,
		headerTitleAlign: 'center',
		headerStyle: {
			elevation: Platform.OS === 'ios' ? 0 : 4,
			shadowOpacity: Platform.OS === 'ios' ? 0 : 4,
			borderBottomWidth: 0,
			backgroundColor: Colors.screenBackground,
		},
		headerTintColor: Colors.lightGray,
	};
};

const styles = StyleSheet.create({
	hederMenuIcon: {
		color: Colors.lightGray,
	},
	headerIconContainer: {
		marginHorizontal: 15,
	},
});
