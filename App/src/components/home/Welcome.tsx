import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import { useSelector } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { FontAwesome } from '@expo/vector-icons';

import { Colors } from '../../styles';
import {
	smallestFontSize,
	largeFontSize,
	baseFontSize,
} from '../../styles/typography';
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
				<Image
					style={styles.img}
					source={require('../../../assets/pic.jpeg')}
				/>
				<Text
					style={styles.headerSecond}
				>{`${user?.name} ${user?.lastName}`}</Text>
				{/* <FontAwesome name="user-circle-o" color={Colors.lightGray} size={90} /> */}
			</View>
			{/* <View style={styles.headerContainer}></View> */}
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
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: 20,
		paddingHorizontal: 20,
		// justifyContent: 'flex-end',
		//justifyContent: 'center',
	},
	img: {
		width: 70,
		height: 70,
		borderRadius: 35,
		borderColor: Colors.mediumGray,
		borderWidth: 1,
		marginRight: 10,
	},
	headerContainer: {
		flexDirection: 'row',
		marginVertical: 10,
	},
	headerFirst: {
		color: Colors.lightGray,
	},
	headerSecond: {
		fontSize: 16,
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
