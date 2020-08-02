import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

import { Colors } from '../../styles';
import { smallestFontSize } from '../../styles/typography';
import { authSelector } from '../../state/selectors';

const Welcome: FunctionComponent = () => {
	const { user } = useSelector(authSelector);

	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.welcomePicContainer}>
				<FontAwesome name="user-circle-o" color={Colors.lightGray} size={60} />
			</TouchableOpacity>
			<View style={styles.welcomeTextContainer}>
				<View style={styles.headerContainer}>
					<Text style={styles.headerFirst}>Bienvenido, </Text>
					<Text
						style={styles.headerSecond}
					>{`${user?.name} ${user?.lastName}`}</Text>
				</View>
				<Text style={styles.lastAccess}>Último acceso: 20 May 14:48</Text>
				<Text style={styles.lastPassChange}>
					Último cambio de contraseña: 7 May 14:22
				</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 40,
		flexDirection: 'row',
		justifyContent: 'center',
	},
	welcomePicContainer: {
		justifyContent: 'center',
	},
	welcomeTextContainer: {
		marginLeft: 10,
		justifyContent: 'center',
	},
	headerContainer: {
		flexDirection: 'row',
		marginBottom: 5,
	},
	headerFirst: {
		color: Colors.lightGray,
	},
	headerSecond: {
		fontWeight: 'bold',
		color: Colors.lightGray,
	},
	lastAccess: {
		fontSize: smallestFontSize,
		color: Colors.lightGray,
	},
	lastPassChange: {
		fontSize: smallestFontSize,
		color: Colors.lightGray,
	},
});

export default Welcome;
