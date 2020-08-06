import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Colors } from '../../styles';
import { PrivateDrawerNavigationProp } from '../types';

interface IScreenHeaderOptionsProps {
	title: string;
	props?: {};
}

export const screenHeaderOptions = ({
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
		// headerRight: () => {
		// 	return (
		// 		<TouchableOpacity
		// 			style={styles.headerIconContainer}
		// 			onPress={() => logOut()}
		// 		>
		// 			<Ionicons
		// 				style={styles.hederMenuIcon}
		// 				name="ios-log-out"
		// 				size={28}
		// 			/>
		// 		</TouchableOpacity>
		// 	);
		// },
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
