import React, { FunctionComponent, useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableHighlight, KeyboardAvoidingView, ScrollView } from 'react-native'
import { useDispatch } from 'react-redux';

import { Colors, Buttons } from '../../styles'
import { loginText } from '../../styles/typography';
import { pageHorizontalPadding, pageTopPadding } from '../../styles/spacing';
import { transparent } from '../../styles/colors';
import { signup } from '../../state/auth/actions';

const SignupScreen: FunctionComponent = () => {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useDispatch();

    const disabledSignup = () => {
		return !name || !lastName || !email || !userName || !password || !confirmPassword || !(password === confirmPassword);
	}

    return (
        <ScrollView style={styles.container}
		    contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputBox}
                    value={name}
                    onChangeText={setName}
                    placeholder="Nombre"
                    placeholderTextColor={Colors.mediumGray}
                    autoCapitalize="none"
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputBox}
                    value={lastName}
                    onChangeText={setLastName}
                    placeholder="Apellido"
                    placeholderTextColor={Colors.mediumGray}
                    autoCapitalize="none"
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputBox}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Correo electrónico"
                    placeholderTextColor={Colors.mediumGray}
                    autoCapitalize="none"
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputBox}
                    value={userName}
                    onChangeText={setUserName}
                    placeholder="Nombre de usuario"
                    placeholderTextColor={Colors.mediumGray}
                    autoCapitalize="none"
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputBox}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Contraseña"
                    placeholderTextColor={Colors.mediumGray}
                    autoCapitalize="none"
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputBox}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    placeholder="Confirmación de contraseña"
                    placeholderTextColor={Colors.mediumGray}
                    autoCapitalize="none"
                />
            </View>
            <TouchableHighlight
                disabled={disabledSignup()}
                style={[styles.signupButton, disabledSignup() ? styles.signupButtonDisabled : null]}
                underlayColor={Colors.main}
                onPress={() => dispatch(signup({ name, lastName, email, userName, password }))}
            >
                <Text style={[styles.signupButtonText, disabledSignup() ? styles.signupButtonTextDisabled : null]}>
                    REGISTRARSE
                </Text>
            </TouchableHighlight>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.screenBackground,
        paddingHorizontal: pageHorizontalPadding,
        paddingTop: pageTopPadding
    },
    inputContainer: {
        flexDirection: 'row',
		alignItems: 'center',
        borderBottomColor: Colors.lightGray,
		borderBottomWidth: 0.4,
		marginBottom: 20
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
		backgroundColor: transparent,
		borderColor: Colors.main,
		borderWidth: 1,
		marginVertical: 20
	},
	signupButtonDisabled : {
		borderColor: Colors.mediumGray,
		borderWidth: 1,
	},
	signupButtonText: {
		color: Colors.main,
		padding: 10
	},
	signupButtonTextDisabled: {
		color: Colors.mediumGray,
		padding: 10
	},
})

export default SignupScreen;
