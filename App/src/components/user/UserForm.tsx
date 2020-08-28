import React, { useState, FunctionComponent } from 'react';
import FloatingTitleTextInput from '../form/FloatingTitleTextInput';
import FormButton from '../form/FormButton';
import { IUser } from '../../state/auth/types';

interface IUserFormProps {
	formButtonText: string;
	formButtonCallback: Function;
	user?: IUser;
	updatePassword: boolean;
}

const UserForm: FunctionComponent<IUserFormProps> = ({
	formButtonText,
	formButtonCallback,
	user,
	updatePassword,
}) => {
	const [name, setName] = useState(user ? user.name : '');
	const [lastName, setLastName] = useState(user ? user.lastName : '');
	const [email, setEmail] = useState(user ? user.email : '');
	const [userName, setUserName] = useState(user ? user.userName : '');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	// Error messages
	const [
		confirmPasswordErrorMessage,
		setConfirmPasswordErrorMessage,
	] = useState<string>('');

	const [emailErrorMessage, setemailErrorMessage] = useState<string>('');

	const disabledFormButton = () => {
		return (
			!name ||
			!lastName ||
			!email ||
			!userName ||
			(updatePassword &&
				(!password ||
					!confirmPassword ||
					confirmPasswordErrorMessage !== '' ||
					emailErrorMessage !== ''))
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
		<>
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
			{updatePassword && (
				<FloatingTitleTextInput
					value={password}
					onChangeValue={setPassword}
					placeHolderText="Contraseña"
					secureTextEntry={true}
					onEndEditingFunction={validateConfirmPassword}
					errorMessage={''}
				/>
			)}
			{updatePassword && (
				<FloatingTitleTextInput
					value={confirmPassword}
					onChangeValue={setConfirmPassword}
					placeHolderText="Confirmación de contraseña"
					secureTextEntry={true}
					onEndEditingFunction={validateConfirmPassword}
					errorMessage={confirmPasswordErrorMessage}
				/>
			)}
			<FormButton
				isDisabled={disabledFormButton}
				onPressCallback={() =>
					formButtonCallback(user?._id, name, lastName, email, userName)
				}
				text={formButtonText}
			/>
		</>
	);
};

export default UserForm;
