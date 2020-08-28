import React, { FunctionComponent, useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
	Image,
	Switch,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

import { login } from '../../state/auth/actions';
import { Colors, Buttons } from '../../styles';
import { LoginScreenNavigationProp } from '../../navigation/auth/types';
import { transparent } from '../../styles/colors';
import { pageHorizontalPadding } from '../../styles/spacing';
import FormInput from '../../components/form/FormInput';
import FormButton from '../../components/form/FormButton';

interface LoginProps {
	navigation: LoginScreenNavigationProp;
}

const LoginScreen: FunctionComponent<LoginProps> = ({ navigation }) => {
	const [userName, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);
	const [isEnabled, setIsEnabled] = useState(false);
	const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
	const dispatch = useDispatch();

	const disabledLogin = () => {
		return !userName || !password;
	};

	return (
		<ScrollView
			style={styles.scrollContainer}
			contentContainerStyle={{ flexGrow: 1 }}
		>
			<View style={styles.logoContainer}>
				<Image
					style={styles.img}
					source={require('../../../assets/logo2.png')}
				/>
			</View>
			<View style={styles.formContainer}>
				<FormInput
					value={userName}
					onChangeValue={setUsername}
					placeHolderText="Usuario"
					iconName="user"
				/>
				<FormInput
					value={password}
					onChangeValue={setPassword}
					placeHolderText="Contraseña"
					iconName="lock"
					secureTextEntry={secureTextEntry}
				>
					<TouchableOpacity
						onPress={() => setSecureTextEntry((state) => !state)}
					>
						<Ionicons
							style={styles.inputIcon}
							name={secureTextEntry ? 'md-eye' : 'md-eye-off'}
							color={Colors.lightGray}
							size={20}
						/>
					</TouchableOpacity>
				</FormInput>

				<View style={styles.switchContainer}>
					<Switch
						style={styles.switch}
						trackColor={{ false: Colors.lightGray, true: Colors.main }}
						thumbColor={Colors.lightGray}
						ios_backgroundColor="#3e3e3e"
						onValueChange={toggleSwitch}
						value={isEnabled}
					/>
					<Text style={styles.switchText}>Recordar Usuario</Text>
				</View>

				<FormButton
					isDisabled={disabledLogin}
					onPressCallback={() => dispatch(login({ userName, password }))}
					text="INGRESAR"
				/>

				<TouchableOpacity
					style={{ alignItems: 'center' }}
					onPress={() => navigation.navigate('Forgot')}
				>
					<Text style={styles.forgotPasswordText}>¿Olvidó su contraseña?</Text>
				</TouchableOpacity>
				<View style={styles.signupContainer}>
					<Text style={styles.signupText}>¿No tienes una cuenta?</Text>
					<TouchableOpacity onPress={() => navigation.navigate('Signup')}>
						<Text style={[styles.signupText, styles.signupActionText]}>
							Regístrate
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	scrollContainer: {
		flex: 1,
		backgroundColor: Colors.screenBackground,
		paddingHorizontal: pageHorizontalPadding,
	},
	logoContainer: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center',
	},
	img: {
		width: '60%',
		height: undefined,
		aspectRatio: 598 / 176,
	},
	formContainer: {
		flex: 1,
	},
	inputIcon: {
		padding: 5,
	},
	switchContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: 10,
	},
	switch: {
		marginRight: 10,
	},
	switchText: {
		color: Colors.lightGray,
	},
	signinButton: {
		...Buttons.base,
		backgroundColor: transparent,
		borderColor: Colors.main,
		borderWidth: 1,
		marginBottom: 20,
	},
	signinButtonDisabled: {
		borderColor: Colors.mediumGray,
		borderWidth: 1,
	},
	signinButtonText: {
		color: Colors.main,
		padding: 10,
	},
	signinButtonTextDisabled: {
		color: Colors.mediumGray,
		padding: 10,
	},
	forgotPasswordText: {
		padding: 10,
		color: Colors.lightGray,
	},
	signupContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'center',
		paddingBottom: 35,
	},
	signupText: {
		color: Colors.lightGray,
		marginHorizontal: 5,
	},
	signupActionText: {
		color: Colors.main,
	},
});

export default LoginScreen;
