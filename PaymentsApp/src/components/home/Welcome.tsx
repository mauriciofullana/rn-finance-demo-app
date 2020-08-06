import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import { useSelector } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { FontAwesome } from '@expo/vector-icons';

import { Colors } from '../../styles';
import { smallestFontSize } from '../../styles/typography';
import { authSelector } from '../../state/selectors';

const Welcome: FunctionComponent = () => {
	const { user } = useSelector(authSelector);

	const verifyPermissions = async () => {
		const result = await Permissions.askAsync(Permissions.CAMERA_ROLL);
		if (!result.granted) {
			Alert.alert(
				'Insufficient permissions!',
				'You need to grant gallery permissions to use this feature.',
				[{ text: 'OK' }]
			);
			return false;
		}

		return true;
	};

	const takeImageHandler = async () => {
		const hasPermission = await verifyPermissions();
		if (!hasPermission) {
			return;
		}
		const image = await ImagePicker.launchImageLibraryAsync({
			allowsEditing: true,
			base64: true,
		});

		console.log(image);
	};

	return (
		<View style={styles.container}>
			<View
				style={styles.welcomePicContainer}
				// onPress={takeImageHandler}
			>
				{/* <Image
					style={styles.img}
					source={require('../../../assets/chino.png')}
				/> */}
				<FontAwesome name="user-circle-o" color={Colors.lightGray} size={90} />
			</View>
			<View style={styles.headerContainer}>
				<Text
					style={styles.headerSecond}
				>{`${user?.name} ${user?.lastName}`}</Text>
			</View>
			<View>
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
		justifyContent: 'center',
		alignItems: 'center',
	},
	welcomePicContainer: {
		justifyContent: 'center',
	},
	img: {
		width: 100,
		height: 100,
		borderRadius: 50,
		borderColor: Colors.mediumGray,
		borderWidth: 1,
	},
	headerContainer: {
		flexDirection: 'row',
		marginVertical: 10,
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
