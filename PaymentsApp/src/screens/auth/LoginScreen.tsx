import React, { FunctionComponent, useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	TextInput,
	TouchableOpacity,
	Image
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';

import { login } from '../../state/auth/actions';
import { authSelector } from '../../state/selectors';
import { AUTH_CLEAR_ERROR } from '../../state/auth/types';
import { Colors, Buttons } from '../../styles';
import { LoginScreenNavigationProp } from '../../navigation/auth/types';
import Spinner from '../../components/Spinner';
import CommonError from '../../components/CommonError';

interface LoginProps {
	navigation: LoginScreenNavigationProp;
}

const LoginScreen: FunctionComponent<LoginProps> = ({ navigation }) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();
	const { loading } = useSelector(authSelector);

	const disabledLogin = () => {
		return !username || !password;
	}

	return (
		<ScrollView style={styles.scrollContainer}>
			<View style={styles.container}>
				<Spinner text="Cargand..." visible={loading} />
				<CommonError
					selector={authSelector}
					dispatchCallback={() => {
						dispatch({ type: AUTH_CLEAR_ERROR });
					}}
				/>
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
							value={username}
							onChangeText={setUsername}
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
							value={password}
							onChangeText={setPassword}
							placeholder="Contraseña"
							autoCapitalize="none"
							secureTextEntry={true}
						/>
					</View>
					<TouchableOpacity
						disabled={disabledLogin()}
						style={[styles.signupButton, disabledLogin() ? styles.signupButtonDisabled : null]}
						onPress={() => dispatch(login({ username, password }))}
					>
						<Text style={styles.signinButtonText}>INGRESAR</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{ alignItems: 'center' }}
						onPress={() => navigation.navigate('Forgot')}
					>
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
		backgroundColor: Colors.screenBackground
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
		backgroundColor: Buttons.enabled.backgroundColor,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 25,
		marginBottom: 20,
		borderRadius: 10,
		height: 50,
		width: '100%'
	},
	signupButtonDisabled : {
		backgroundColor: Buttons.disabled.backgroundColor
	},
	signinButtonText: {
		color: 'white',
		padding: 10
	}
});

export default LoginScreen;
