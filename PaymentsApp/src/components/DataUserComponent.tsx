import React, { FunctionComponent } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Alert} from 'react-native';
import { Colors } from '../styles';
import { Avatar } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions'

interface IDataUserProps {
	visible: boolean;
	imgUser: boolean;
	text: string;
	haveImageInProfile: boolean;
}

const userData = [
	{
		id: 1,
		userName: 'Pepe Garcia',
		lastAccess: '20 May 14:48',
		lastChangePasswrod: new Date(),
		haveImageInProfile: true
	}
];



const dataUserComponent: FunctionComponent<IDataUserProps> = ({ imgUser, visible, text, haveImageInProfile }) => {

	//#region  LoadAvatar Gallery/Camera

	const LoadUserAvatarInGallery = async () => {
		// granted is a prop for Permissions 
		const {granted} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
		if(granted) {
			let avatarLoadGallery = await ImagePicker.launchImageLibraryAsync({
				mediaTypes:ImagePicker.MediaTypeOptions.Images,
				allowsEditing: true,
				aspect: [1,1],
				quality: 0.5
			})
			console.log(avatarLoadGallery)
		} else {
			Alert.alert("ERROR, no tiene permisos suficientes.")
		}
	}

	const LoadUserAvatarInCamera = async () => {
		// granted is a prop for Permissions 
		const {granted} = await Permissions.askAsync(Permissions.CAMERA)
		if(granted) {
			let avatarLoadCamera = await ImagePicker.launchCameraAsync({
				mediaTypes:ImagePicker.MediaTypeOptions.Images,
				allowsEditing: true,
				aspect: [1,1],
				quality: 0.5
			})
			console.log(avatarLoadCamera)
		} else {
			Alert.alert("ERROR, no tiene permisos suficientes.")
		}
	}
	//#endregion

	
	const UserAvatar = () => (
		<Avatar.Image size={70} source={require('../../assets/chino.png')} />
	);


	const DataLoad = (userData: any) => {
	return (
		<View style={styles.welcome}>
		<TouchableOpacity style={styles.welcomePicContainer} onPress={() => LoadUserAvatarInCamera()}>
		<UserAvatar/>
		</TouchableOpacity>
		<View style={styles.welcomeTextContainer}>
			<View style={{ flexDirection: 'row', marginBottom: 5 }}>
				<Text style={{ color: '#d6d6d6' }}>Bienvenido, </Text>
				<Text style={{ fontWeight: 'bold', color: '#d6d6d6' }}>
					Pepe Garcia{userData.userName}
				</Text>
			</View>
			<Text style={{ fontSize: 13, color: '#c9c9c9' }}>
				Último acceso: 20 May 14:48
			</Text>
			<Text style={{ fontSize: 13, color: '#c9c9c9' }}>
				Último cambio de contraseña: 7 May 14:22
			</Text>
		</View>
	</View>
	);
};

	return (
		<View style={styles.welcome}>
		<DataLoad/>
	</View>
	);
};

const styles = StyleSheet.create({
	welcome: {
		flex: 1.5,
		flexDirection: 'row',
		paddingHorizontal: 15,
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 40
	},
	welcomePicContainer: {
		justifyContent: 'center'
	},
	img: {
		width: 95,
		height: 95,
		borderRadius: 50,
		borderColor: Colors.mediumGray,
		borderWidth: 1
	},
	welcomeTextContainer: {
		marginLeft: 10,
		justifyContent: 'center'
	}
});

export default dataUserComponent;
