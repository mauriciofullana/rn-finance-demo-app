import React, { FunctionComponent, useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';

import { Colors } from '../../styles';
import { pageHorizontalPadding, pageTopPadding } from '../../styles/spacing';
import { signup } from '../../state/auth/actions';
import FormButton from '../../components/form/FormButton';
import FloatingTitleTextInput from '../../components/form/FloatingTitleTextInput';
import Spinner from '../../components/Spinner';
import CommonError from '../../components/CommonError';

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

	return (
		<ScrollView
			style={styles.container}
			contentContainerStyle={{ flexGrow: 1 }}
		>
			<FloatingTitleTextInput
				value={name}
				onChangeValue={setName}
				placeHolderText="Nombre"
				errorMessage={''}
			/>
			<FloatingTitleTextInput
				value={lastName}
				onChangeValue={setLastName}
				placeHolderText="Apellido"
				errorMessage={''}
			/>
			<FloatingTitleTextInput
				value={email}
				onChangeValue={setEmail}
				placeHolderText="Correo electrónico"
				onEndEditingFunction={validateEmail}
				errorMessage={emailErrorMessage}
			/>
			<FloatingTitleTextInput
				value={userName}
				onChangeValue={setUserName}
				placeHolderText="Nombre de usuario"
				errorMessage={''}
			/>
			<FloatingTitleTextInput
				value={password}
				onChangeValue={setPassword}
				placeHolderText="Contraseña"
				secureTextEntry={true}
				onEndEditingFunction={validateConfirmPassword}
				errorMessage={''}
			/>
			<FloatingTitleTextInput
				value={confirmPassword}
				onChangeValue={setConfirmPassword}
				placeHolderText="Confirmación de contraseña"
				secureTextEntry={true}
				onEndEditingFunction={validateConfirmPassword}
				errorMessage={confirmPasswordErrorMessage}
			/>
			<FormButton
				isDisabled={disabledSignup}
				onPressCallback={() =>
					dispatch(signup({ name, lastName, email, userName, password }))
				}
				text="REGISTRARSE"
			/>
		</ScrollView>
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
