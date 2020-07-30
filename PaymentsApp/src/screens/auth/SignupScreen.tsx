import React, { FunctionComponent, useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';

import { Colors } from '../../styles';
import { pageHorizontalPadding, pageTopPadding } from '../../styles/spacing';
import { signup } from '../../state/auth/actions';
import FormInput from '../../components/form/FormInput';
import FormButton from '../../components/form/FormButton';
import FloatingTitleTextInput from '../../components/form/FloatingTitleTextInput';

const SignupScreen: FunctionComponent = () => {
	const [name, setName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const dispatch = useDispatch();

	const disabledSignup = () => {
		return (
			!name ||
			!lastName ||
			!email ||
			!userName ||
			!password ||
			!confirmPassword ||
			!(password === confirmPassword)
		);
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
			/>
			<FloatingTitleTextInput
				value={lastName}
				onChangeValue={setLastName}
				placeHolderText="Apellido"
			/>
			<FloatingTitleTextInput
				value={email}
				onChangeValue={setEmail}
				placeHolderText="Correo electrónico"
			/>
			<FloatingTitleTextInput
				value={userName}
				onChangeValue={setUserName}
				placeHolderText="Nombre de usuario"
			/>
			<FloatingTitleTextInput
				value={password}
				onChangeValue={setPassword}
				placeHolderText="Contraseña"
			/>
			<FloatingTitleTextInput
				value={confirmPassword}
				onChangeValue={setConfirmPassword}
				placeHolderText="Confirmación de contraseña"
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
