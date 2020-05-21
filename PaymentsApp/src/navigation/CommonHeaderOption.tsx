import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../styles';
import { useNavigation } from '@react-navigation/native';
import { PrivateDrawerNavigationProp } from './types';


export const screenHeaderOptions = (
	logOutCallback: Function
) => {

    const navigation = useNavigation<PrivateDrawerNavigationProp>();

	return {
		headerTransparent: false,
		headerTitle: () => null,
		headerTitleStyle: { flex: 1, textAlign: 'center' },
		headerLeft: () => {
			return (
				<View style={{ flexDirection: 'row' }}>
					<TouchableOpacity
						onPress={() => navigation.openDrawer() }
						style={styles.headerIconContainer}
					>
						<Ionicons style={styles.hederMenuIcon} name="md-menu" size={28} />
					</TouchableOpacity>
					<Image
						style={styles.img}
						source={require('../../assets/logoHeader.png')}
					/>
				</View>
			);
		},
		headerRight: () => {
			return (
				<TouchableOpacity
					style={styles.headerIconContainer}
					onPress={() => logOutCallback()}
				>
					<Ionicons style={styles.hederMenuIcon} name="ios-log-out" size={28} />
				</TouchableOpacity>
			);
		}
	};
};

const styles = StyleSheet.create({
	hederMenuIcon: {
		color: Colors.black
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
