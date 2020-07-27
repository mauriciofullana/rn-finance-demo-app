import React, { FunctionComponent, useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	TextInput,
	TouchableOpacity,
	TouchableHighlight,
	Image,
	KeyboardAvoidingView,
	Switch
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

import { login } from '../../state/auth/actions';
import { Colors, Buttons } from '../../styles';
import { LoginScreenNavigationProp } from '../../navigation/auth/types';
import Spinner from '../../components/Spinner';
import CommonError from '../../components/CommonError';
import { loginText } from '../../styles/typography';
import { transparent } from '../../styles/colors';
import { commonSelector } from '../../state/selectors';
import { CLEAR_ERROR } from '../../state/common/types';
import { pageHorizontalPadding } from '../../styles/spacing';

interface LoginProps {
	navigation: LoginScreenNavigationProp;
}

const LoginScreen: FunctionComponent<LoginProps> = ({ navigation }) => {
	const [userName, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);
	const [isEnabled, setIsEnabled] = useState(false);
	const toggleSwitch = () => setIsEnabled(previousState => !previousState);
	const dispatch = useDispatch();
	const { error, errorMessage, loading } = useSelector(commonSelector);

	const disabledLogin = () => {
		return !userName || !password;
	}

	console.log('LOGIN SCREEEEEMN  --  ' + error);

	return (
		<ScrollView style={styles.scrollContainer}
		contentContainerStyle={{ flexGrow: 1 }}>
				{ loading && <Spinner text="Cargand..." visible={loading} />}
				{ error &&
					<CommonError 
						errorMessage={errorMessage}
						callBackFunction={() => dispatch({type: CLEAR_ERROR})}
					/>
				}
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
							color={Colors.lightGray}
							size={20}
						/>
						<TextInput
							style={styles.inputBox}
							value={userName}
							onChangeText={setUsername}
							placeholder="Usuario"
							placeholderTextColor={Colors.mediumGray}
							autoCapitalize="none"
						/>
					</View>
					<View style={styles.inputCotainer}>
						<FontAwesome
							style={styles.inputIcon}
							name="lock"
							color={Colors.lightGray}
							size={20}
						/>
						<TextInput
							style={styles.inputBox}
							value={password}
							onChangeText={setPassword}
							placeholder="Contraseña"
							placeholderTextColor={Colors.mediumGray}
							autoCapitalize="none"
							secureTextEntry={secureTextEntry}
						/>
						<View style={styles.eyeIconContainer}>
							<TouchableOpacity onPress={()=>setSecureTextEntry(state => !state)}>
								<Ionicons
									style={styles.inputIcon}
									name={secureTextEntry ? 'md-eye' : 'md-eye-off'}
									color={Colors.lightGray}
									size={20}
								/>
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.switchContainer}>
						<Switch
							style={styles.switch}
							trackColor={{ false: Colors.lightGray, true: Colors.main }}
							thumbColor={Colors.lightGray}
							ios_backgroundColor="#3e3e3e"
							onValueChange={toggleSwitch}
							value={isEnabled}
						/>
						<Text style={styles.switchText}>
							Recordar Usuario
						</Text>
					</View>
					<TouchableHighlight
						disabled={disabledLogin()}
						style={[styles.signinButton, disabledLogin() ? styles.signinButtonDisabled : null]}
						onPress={() => dispatch(login({ userName, password }))}
						underlayColor={Colors.main}
					>
						<Text style={[styles.signinButtonText, disabledLogin() ? styles.signinButtonTextDisabled : null]}>
							INGRESAR
						</Text>
					</TouchableHighlight>
					<TouchableOpacity
						style={{ alignItems: 'center' }}
						onPress={() => navigation.navigate('Forgot')}
					>
						<Text style={styles.forgotPasswordText}>¿Olvidó su contraseña?</Text>
					</TouchableOpacity>
					<View style={styles.signupContainer}>
						<Text style={styles.signupText}>
							¿No tienes una cuenta?
						</Text>
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
		paddingHorizontal: pageHorizontalPadding
	},
	container: {
		flex: 1
	},
	logoContainer: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center'
	},
	img: {
		width: '60%',
		height: undefined,
		aspectRatio: 598 / 176
	},
	formContainer: {
		flex: 1
	},
	inputCotainer: {
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomColor: Colors.lightGray,
		borderBottomWidth: 0.4,
		marginBottom: 20
	},
	inputIcon: {
		padding: 5
	},
	eyeIconContainer: {
		flex: 1,
		alignItems: 'flex-end'
	},
	inputBox: {
		...loginText,
		paddingTop: 10,
		paddingRight: 10,
		paddingBottom: 10,
		paddingLeft: 10
	},
	switchContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 10,
		marginBottom: 20,
	},
	switch: {
		marginRight: 10
	},
	switchText: {
		color: Colors.lightGray
	},
	signinButton: {
		...Buttons.base,
		backgroundColor: transparent,
		borderColor: Colors.main,
		borderWidth: 1,
		marginBottom: 20
	},
	signinButtonDisabled : {
		borderColor: Colors.mediumGray,
		borderWidth: 1,
	},
	signinButtonText: {
		color: Colors.main,
		padding: 10
	},
	signinButtonTextDisabled: {
		color: Colors.mediumGray,
		padding: 10
	},
	forgotPasswordText: {
		padding: 10,
		color: Colors.lightGray
	},
	signupContainer: {
		flex: 1, 
		flexDirection: 'row', 
		alignItems: 'flex-end', 
		justifyContent: 'center', 
		paddingBottom: 35
	},
	signupText: {
		color: Colors.lightGray,
		marginHorizontal: 5,
		fontSize: 16
	},
	signupActionText: {
		color: Colors.main
	}
});

export default LoginScreen;
