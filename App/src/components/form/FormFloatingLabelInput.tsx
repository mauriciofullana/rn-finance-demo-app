import React, { FunctionComponent, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { FloatingLabelInput } from 'react-native-floating-label-input';

import { Colors } from '../../styles';
import {
	inputText,
	baseFontSize,
	inputErrorText,
} from '../../styles/typography';

interface IFloatingTitleTextInputProps {
	value?: string;
	label: string;
	currencyDivider: ',' | '.';
	blurOnSubmit: boolean;
	maxLength: number;
	onChangeText(text: string): void;
	secureTextEntry?: boolean;
	errorMessage?: string;
	onEndEditingFunction?: () => void;
	required?: boolean;
}

const FormFloatingLabelInput: FunctionComponent<IFloatingTitleTextInputProps> = ({
	value,
	label,
	currencyDivider,
	errorMessage,
	onChangeText,
	secureTextEntry,
	onEndEditingFunction,
	required,
}) => {
	const inputLabel = (label += required ? ' *' : '');

	return (
		<View style={styles.container}>
			<FloatingLabelInput
				currencyDivider={currencyDivider}
				label={inputLabel}
				value={value}
				blurOnSubmit={false}
				maxLength={20}
				onChangeText={onChangeText}
				secureTextEntry={secureTextEntry}
				onEndEditing={onEndEditingFunction}
				containerStyles={
					errorMessage && errorMessage != ''
						? {
								borderBottomColor: Colors.lightRed,
								borderBottomWidth: 1,
						  }
						: {}
				}
			/>
			{errorMessage && errorMessage != '' ? (
				<Animatable.Text
					style={styles.errorMessageText}
					animation="fadeInLeft"
					duration={500}
				>
					{errorMessage}
				</Animatable.Text>
			) : null}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginBottom: 10,
	},
	inputContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomColor: Colors.lightGray,
		borderBottomWidth: 0.4,
		marginBottom: 7,
		height: 50,
	},
	inputContainerError: {
		borderBottomColor: Colors.lightRed,
	},
	inputBox: {
		...inputText,
		flex: 1,
		paddingTop: 10,
		paddingRight: 10,
		paddingBottom: 5,
		paddingLeft: 10,
	},
	inputIcon: {
		padding: 5,
	},
	titleStyles: {
		color: Colors.mediumGray,
		fontSize: baseFontSize,
		position: 'absolute',
		left: 10,
	},
	clearIcon: {
		color: Colors.mediumGray,
		padding: 5,
	},
	errorMessageText: {
		...inputErrorText,
	},
});

export default FormFloatingLabelInput;
