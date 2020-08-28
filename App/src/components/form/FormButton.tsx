import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import { Buttons, Colors } from '../../styles';
import { transparent } from '../../styles/colors';

interface IFormButton {
	isDisabled(): boolean;
	onPressCallback(): void;
	text: string;
}

const FormButton: FunctionComponent<IFormButton> = ({
	isDisabled,
	onPressCallback,
	text,
}) => {
	return (
		<TouchableHighlight
			disabled={isDisabled()}
			style={[
				styles.signinButton,
				isDisabled() ? styles.signinButtonDisabled : null,
			]}
			onPress={onPressCallback}
			underlayColor={Colors.main}
		>
			<Text
				style={[
					styles.signinButtonText,
					isDisabled() ? styles.signinButtonTextDisabled : null,
				]}
			>
				{text}
			</Text>
		</TouchableHighlight>
	);
};

const styles = StyleSheet.create({
	signinButton: {
		...Buttons.base,
		backgroundColor: transparent,
		borderColor: Colors.main,
		borderWidth: 1,
		marginVertical: 20,
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
});

export default FormButton;
