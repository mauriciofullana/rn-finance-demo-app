import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {
	MaterialCommunityIcons,
	MaterialIcons,
	FontAwesome,
	AntDesign
} from '@expo/vector-icons';

import { Colors } from '../../styles';
import { HomeScreenNavigationProp } from '../../navigation/main/types';

interface HomeScreenProps {
	navigation: HomeScreenNavigationProp;
}

const HomeScreen: FunctionComponent<HomeScreenProps> = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<View style={styles.welcome}>
				<TouchableOpacity style={styles.welcomePicContainer}>
					<FontAwesome
						name="user-circle-o"
						color={Colors.mediumGray}
						size={80}
					/>
					{/* <Image
						style={styles.img}
						source={require('../../../assets/chino.png')}
					/> */}
				</TouchableOpacity>
				<View style={styles.welcomeTextContainer}>
					<View style={{ flexDirection: 'row', marginBottom: 5 }}>
						<Text style={{ fontSize: 17 }}>Bienvenido, </Text>
						<Text style={{ fontWeight: 'bold', fontSize: 17 }}>
							Mauricio Fullana
						</Text>
					</View>
					<Text style={{ fontSize: 12 }}>Último acceso: 20 May 14:48</Text>
					<Text style={{ fontSize: 12 }}>
						Último cambio de contraseña: 7 May 14:22
					</Text>
				</View>
			</View>
			<TouchableOpacity style={styles.section}>
				<View style={styles.iconContainer}>
					<MaterialCommunityIcons
						style={styles.icon}
						name="qrcode"
						color={Colors.white}
						size={35}
					/>
				</View>
				<View style={{ flex: 1 }}>
					<Text style={styles.sectionText}>Cobrar</Text>
				</View>
			</TouchableOpacity>
			<View style={styles.divider} />
			<TouchableOpacity style={styles.section}>
				<View style={styles.iconContainer}>
					<MaterialIcons
						style={styles.icon}
						name="attach-money"
						color={Colors.white}
						size={35}
					/>
				</View>
				<View style={{ flex: 1 }}>
					<Text style={styles.sectionText}>Pagar</Text>
				</View>
			</TouchableOpacity>
			<View style={styles.divider} />
			<TouchableOpacity
				onPress={() => navigation.navigate('Movements')}
				style={styles.section}
			>
				<View style={styles.iconContainer}>
					<MaterialCommunityIcons
						style={styles.icon}
						name="format-list-bulleted"
						color={Colors.white}
						size={35}
					/>
				</View>
				<View style={{ flex: 1 }}>
					<Text style={styles.sectionText}>Movimientos</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: Colors.screenBackground
	},
	welcome: {
		flex: 1,
		flexDirection: 'row',
		paddingHorizontal: 15,
		backgroundColor: 'white'
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
		flex: 1,
		marginLeft: 10,
		justifyContent: 'center'
	},
	section: {
		flex: 1,
		paddingRight: 30,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	iconContainer: {
		flex: 1,
		alignItems: 'flex-end'
	},
	divider: {
		marginHorizontal: 50,
		borderBottomColor: Colors.white,
		borderBottomWidth: 0.3
	},
	icon: {
		marginRight: 25,
		padding: 12,
		backgroundColor: '#29394f',
		borderRadius: 50
	},
	sectionText: {
		color: Colors.white,
		fontSize: 18
	}
});

export default HomeScreen;
