import React, { FunctionComponent, useState, ReactNode } from 'react';
import { View, Text, Animated, StyleSheet, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { Colors } from '../../styles';
import {
	inputText,
	baseFontSize,
	smallestFontSize,
} from '../../styles/typography';

interface IFloatingTitleTextInputProps {
	value: string;
	onChangeValue(text: string): void;
	placeHolderText: string;
	iconName?: string;
	children?: ReactNode;
	secureTextEntry?: boolean;
}

const FloatingTitleTextInput: FunctionComponent<IFloatingTitleTextInputProps> = ({
	value,
	onChangeValue,
	placeHolderText,
	iconName,
	secureTextEntry = false,
	children,
}) => {
	const position = new Animated.Value(0);

	const handleFocus = () => {
		if (!value) {
			Animated.timing(position, {
				toValue: 1,
				duration: 150,
				useNativeDriver: false,
			}).start();
		}
	};

	const handleBlur = () => {
		if (!value) {
			Animated.timing(position, {
				toValue: 0,
				duration: 150,
			}).start();
		}
	};

	const animatedStyles = () => {
		const topPosition = position.interpolate({
			inputRange: [0, 1],
			outputRange: [15, -5],
		});

		const size = position.interpolate({
			inputRange: [0, 1],
			outputRange: [baseFontSize, smallestFontSize],
		});

		return {
			top: topPosition,
			fontSize: size,
		};
	};

	return (
		<View style={styles.inputContainer}>
			{iconName && (
				<FontAwesome
					style={styles.inputIcon}
					name={iconName}
					color={Colors.lightGray}
					size={20}
				/>
			)}
			<Animated.Text style={[styles.titleStyles, animatedStyles()]}>
				{placeHolderText}
			</Animated.Text>
			<TextInput
				style={styles.inputBox}
				value={value}
				onChangeText={onChangeValue}
				onFocus={handleFocus}
				onBlur={handleBlur}
				placeholderTextColor={Colors.mediumGray}
				autoCapitalize="none"
				secureTextEntry={secureTextEntry}
			/>
			{children}
		</View>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomColor: Colors.lightGray,
		borderBottomWidth: 0.4,
		marginBottom: 20,
		height: 50,
	},
	inputBox: {
		...inputText,
		flex: 1,
		paddingTop: 10,
		paddingRight: 10,
		paddingBottom: 10,
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
});

export default FloatingTitleTextInput;
