import React, { FunctionComponent, useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	TextInput,
	TouchableOpacity,
	Image,
	KeyboardAvoidingView
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
import { loginText } from '../../styles/typography';
import { base } from '../../styles/buttons';
import { background } from '../../styles/colors';

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
		<ScrollView style={styles.scrollContainer}
		contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between', flexDirection: 'column' }}>
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
				<KeyboardAvoidingView behavior={'padding'} style={styles.formContainer}>
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
							placeholderTextColor={Colors.lightGray}
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
							placeholderTextColor={Colors.lightGray}
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
				</KeyboardAvoidingView>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	scrollContainer: {
		flex: 1,
		backgroundColor: Colors.screenBackground,
		paddingTop: 90,
		paddingHorizontal: 25
	},
	container: {
		flex: 1,
		marginTop: 90,
		paddingHorizontal: 25
	},
	logoContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	img: {
		width: '80%',
		height: undefined,
		aspectRatio: 598 / 176
	},
	formContainer: {
		flex: 1
	},
	inputCotainer: {
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomColor: Colors.baseText,
		borderBottomWidth: 0.6,
		marginBottom: 20
	},
	inputIcon: {
		padding: 5
	},
	inputBox: {
		...loginText,
		paddingTop: 10,
		paddingRight: 10,
		paddingBottom: 10,
		paddingLeft: 10
	},
	signupButton: {
		...Buttons.base,
		marginTop: 25,
		marginBottom: 20,

		//width: '100%'
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
