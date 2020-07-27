import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, StyleSheet, Platform } from 'react-native';

import LoginScreen from '../../screens/auth/LoginScreen';
import ForgotScreen from '../../screens/auth/ForgotScreen';
import SignupScreen from '../../screens/auth/SignupScreen';
import { AuthStackParamList } from './types';
import { Colors } from '../../styles';
import SettingsScreen from '../../screens/settings/SettingsScreen';

const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthStackNavigator: FunctionComponent = () => {
	return (
		<AuthStack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.screenBackground,
                },
                headerTintColor: Colors.white
			}}
		>
            <AuthStack.Screen
                name="Login"
                component={LoginScreen}
                options={({ navigation }) => ({
                    headerTitle: () => null,
                    headerTransparent: true,
                    headerLeft: () => {
                        return (
                            <TouchableOpacity
                                style={styles.headerIconContainer}
                                onPress={() => navigation.navigate('Settings')}
                            >
                                <Ionicons style={styles.hederMenuIcon} name="ios-settings" size={28} />
                            </TouchableOpacity>
                        );
                    }
                })}
            />
            <AuthStack.Screen
                name="Forgot"
                component={ForgotScreen}
                options={{
                    headerTitle: "Olvido de contraseña",
                    headerBackTitleVisible: false,
                    headerTitleAlign: 'center',
                    headerStyle: {
                        elevation: Platform.OS === "ios" ? 0 : 4,
                        shadowOpacity: Platform.OS === "ios" ? 0 : 4,
                        borderBottomWidth: 0,
                        backgroundColor: Colors.screenBackground
                    }
                }}
            />
            <AuthStack.Screen
                name="Signup"
                component={SignupScreen}
                options={{
                    headerTitle: "Registro",
                    headerBackTitleVisible: false,
                    headerTitleAlign: 'center',
                    headerStyle: {
                        elevation: Platform.OS === "ios" ? 0 : 4,
                        shadowOpacity: Platform.OS === "ios" ? 0 : 4,
                        borderBottomWidth: 0,
                        backgroundColor: Colors.screenBackground
                    }
                }}
            />
            <AuthStack.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    headerTitle: "Ajustes",
                    headerBackTitleVisible: false,
                    headerTitleAlign: 'center',
                    headerStyle: {
                        elevation: Platform.OS === "ios" ? 0 : 4,
                        shadowOpacity: Platform.OS === "ios" ? 0 : 4,
                        borderBottomWidth: 0,
                        backgroundColor: Colors.screenBackground
                    }
                }}
            />
        </AuthStack.Navigator>
	);
};

const styles = StyleSheet.create({
	hederMenuIcon: {
		color: Colors.lightGray
	},
	headerIconContainer: {
		marginHorizontal: 15
	},
	headerTitle: {
		alignItems: 'center'
	},
	img: {
		width: 110,
		height: 32
	}
});

export default AuthStackNavigator;
