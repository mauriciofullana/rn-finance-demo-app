import React, { FunctionComponent, useState } from 'react';
import {
	StyleSheet,
	ScrollView,
	KeyboardAvoidingView,
	Platform,
} from 'react-native';
import { useDispatch } from 'react-redux';

import { Colors } from '../../styles';
import { pageHorizontalPadding, pageTopPadding } from '../../styles/spacing';
import { signup } from '../../state/auth/actions';
import FormButton from '../../components/form/FormButton';
import FloatingTitleTextInput from '../../components/form/FloatingTitleTextInput';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import FormFloatingLabelInput from '../../components/form/FormFloatingLabelInput';

const SignupScreen: FunctionComponent = () => {
	const [name, setName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	// Error messages
	const [
		confirmPasswordErrorMessage,
		setConfirmPasswordErrorMessage,
	] = useState<string>('');

	const [emailErrorMessage, setemailErrorMessage] = useState<string>('');

	const dispatch = useDispatch();

	const disabledSignup = () => {
		return (
			!name ||
			!lastName ||
			!email ||
			!userName ||
			!password ||
			!confirmPassword ||
			confirmPasswordErrorMessage !== '' ||
			emailErrorMessage !== ''
		);
	};

	const validateConfirmPassword = () => {
		if (password !== confirmPassword) {
			setConfirmPasswordErrorMessage('Contraseña y confirmación no coinciden');
		} else {
			setConfirmPasswordErrorMessage('');
		}
	};

	const validateEmail = () => {
		const regexp = new RegExp(
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);

		if (!email || regexp.test(email)) {
			setemailErrorMessage('');
		} else {
			setemailErrorMessage('Formato incorrecto');
		}
	};

	const keyboardVerticalOffset = Platform.OS === 'ios' ? 100 : 0;

	return (
		<KeyboardAvoidingView
			style={styles.container}
			//behavior={Platform.OS === 'ios' ? 'padding' : undefined}
			enabled
			keyboardVerticalOffset={keyboardVerticalOffset}
		>
			<ScrollView showsVerticalScrollIndicator={false}>
				<FormFloatingLabelInput
					currencyDivider="."
					label="Nombre"
					value={name}
					blurOnSubmit={false}
					maxLength={20}
					onChangeText={setName}
					required={true}
				/>
				<FormFloatingLabelInput
					currencyDivider="."
					label="Apellido"
					value={lastName}
					blurOnSubmit={false}
					maxLength={20}
					onChangeText={setLastName}
					required={true}
				/>
				<FormFloatingLabelInput
					currencyDivider="."
					label="Correo electrónico"
					value={email}
					blurOnSubmit={false}
					maxLength={20}
					onChangeText={setEmail}
					onEndEditingFunction={validateEmail}
					errorMessage={emailErrorMessage}
					required={true}
				/>
				<FormFloatingLabelInput
					currencyDivider="."
					label="Nombre de usuario"
					value={userName}
					blurOnSubmit={false}
					maxLength={20}
					onChangeText={setUserName}
					required={true}
				/>
				<FormFloatingLabelInput
					currencyDivider="."
					label="Contraseña"
					value={password}
					blurOnSubmit={false}
					maxLength={20}
					onChangeText={setPassword}
					secureTextEntry={true}
					onEndEditingFunction={validateConfirmPassword}
					required={true}
				/>
				<FormFloatingLabelInput
					currencyDivider="."
					label="Confirmación de contraseña"
					value={confirmPassword}
					blurOnSubmit={false}
					maxLength={20}
					onChangeText={setConfirmPassword}
					secureTextEntry={true}
					onEndEditingFunction={validateConfirmPassword}
					errorMessage={confirmPasswordErrorMessage}
					required={true}
				/>
				<FormButton
					isDisabled={disabledSignup}
					onPressCallback={() =>
						dispatch(signup({ name, lastName, email, userName, password }))
					}
					text="REGISTRARSE"
				/>
			</ScrollView>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.screenBackground,
		paddingHorizontal: pageHorizontalPadding,
		paddingTop: pageTopPadding,
	},
});

export default SignupScreen;
