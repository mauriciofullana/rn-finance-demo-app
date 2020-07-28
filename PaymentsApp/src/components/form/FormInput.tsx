import React, { FunctionComponent, ReactNode } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

import { inputText } from '../../styles/typography';
import { Colors } from '../../styles';

interface IFormInputProps {
    value: string;
    onChangeValue(text: string): void;
    placeHolderText: string;
    iconName?: string
    children?: ReactNode
}

const FormInput: FunctionComponent<IFormInputProps> = ({value, onChangeValue, placeHolderText, iconName, children}) => {
    return (
        <View style={styles.inputContainer}>
            {
            iconName && 
            <FontAwesome
                style={styles.inputIcon}
                name={iconName}
                color={Colors.lightGray}
                size={20}
            />
            }
            <TextInput
                style={styles.inputBox}
                value={value}
                onChangeText={onChangeValue}
                placeholder={placeHolderText}
                placeholderTextColor={Colors.mediumGray}
                autoCapitalize="none"
            />
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
		alignItems: 'center',
        borderBottomColor: Colors.lightGray,
		borderBottomWidth: 0.4,
		marginBottom: 20
    },
    inputBox: {
        ...inputText,
		paddingTop: 10,
		paddingRight: 10,
		paddingBottom: 10,
		paddingLeft: 10
    },
    inputIcon: {
		padding: 5
	},
});

export default FormInput;
