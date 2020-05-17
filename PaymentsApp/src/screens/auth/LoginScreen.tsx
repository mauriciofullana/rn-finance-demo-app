import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LoginScreen: FunctionComponent = () => {
    return (
        <View style={styles.container}>
            <Text>LoginScreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default LoginScreen;
