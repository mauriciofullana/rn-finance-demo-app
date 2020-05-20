import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../styles';

const HomeScreen: FunctionComponent = () => {
    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.screenBackground,
    },
});

export default HomeScreen;
