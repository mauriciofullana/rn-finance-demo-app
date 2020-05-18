import React, { FunctionComponent } from 'react';
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	TextInput,
	TouchableOpacity,
	Image
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { Colors } from '../../styles';

const LoginScreen: FunctionComponent = () => {
	return (
		<ScrollView style={styles.scrollContainer}>
			<View style={styles.container}>
				<View style={styles.logoContainer}>
					<Image
						style={styles.img}
						source={require('../../../assets/logo.png')}
					/>
				</View>
				<View style={styles.formContainer}>
					<View style={styles.inputCotainer}>
						<FontAwesome
							style={styles.inputIcon}
							name="user"
							color={Colors.white}
							size={20}
						/>
						<TextInput
							style={styles.inputBox}
							placeholder="Usuario"
							autoCapitalize="none"
						/>
					</View>
					<View style={styles.inputCotainer}>
						<FontAwesome
							style={styles.inputIcon}
							name="lock"
							color={Colors.white}
							size={20}
						/>
						<TextInput
							style={styles.inputBox}
							placeholder="Contraseña"
							autoCapitalize="none"
							secureTextEntry={true}
						/>
					</View>
					<TouchableOpacity style={styles.signupButton}>
						<Text style={styles.signinButtonText}>INGRESAR</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{ alignItems: 'center' }}>
						<Text style={styles.signinButtonText}>¿Olvidó su contraseña?</Text>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	scrollContainer: {
		flex: 1,
		backgroundColor: '#3c4d65'
	},
	container: {
		marginTop: 80,
		paddingHorizontal: 25
	},
	logoContainer: {
		alignItems: 'center',
		marginBottom: 100
	},
	img: {
		width: '80%',
		height: undefined,
		aspectRatio: 598 / 176
	},
	formContainer: {
		flex: 2
	},
	inputCotainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomColor: Colors.white,
		borderBottomWidth: 0.6,
		marginBottom: 20
	},
	inputIcon: {
		padding: 5
	},
	inputBox: {
		flex: 1,
		fontSize: 16,
		color: Colors.white,
		paddingTop: 10,
		paddingRight: 10,
		paddingBottom: 10,
		paddingLeft: 10
	},
	signupButton: {
		backgroundColor: Colors.main,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 25,
		marginBottom: 20,
		borderRadius: 10,
		height: 50,
		width: '100%'
	},
	signinButtonText: {
		color: 'white',
		padding: 10
	}
});

export default LoginScreen;
