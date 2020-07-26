import React, { FunctionComponent } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import { HomeStackParamList, HomeNavigationProp } from './types';
import { Colors } from '../../styles';
import HomeScreen from '../../screens/home/HomeScreen';
import SettingsScreen from '../../screens/settings/SettingsScreen';
import MovementsScreen from '../../screens/movements/MovementsScreen';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { logout } from '../../state/auth/actions';

const HomeStack = createStackNavigator<HomeStackParamList>();

const HomeStackNavigator: FunctionComponent = () => {

    const navigation = useNavigation<HomeNavigationProp>();
    
    const dispatch = useDispatch();

	const logOut = () => {
		dispatch(logout());
	};

    return (
        <HomeStack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.screenBackground,
                },
                headerTintColor: Colors.white
			}}
        >
            <HomeStack.Screen 
                name="Home"
                component={HomeScreen}
                options={() => ({
                    headerTitle: () => null,
                    headerTransparent: false,
                    headerStyle: {
                        elevation: 0,
                        shadowOpacity: 0,
                        borderBottomWidth: 0,
                        backgroundColor: Colors.screenBackground
                    },
                    headerLeft: () => {
                        return (
                            <TouchableOpacity
                                style={styles.headerIconContainer}
                                onPress={() => navigation.navigate('Settings')}
                            >
                                <Ionicons style={styles.hederMenuIcon} name="ios-settings" size={28} />
                            </TouchableOpacity>
                        );
                    },
                    headerRight: () => {
                        return (
                            <TouchableOpacity
                                style={styles.headerIconContainer}
                                onPress={() => logOut()}
                            >
                                <Ionicons style={styles.hederMenuIcon} name="ios-log-out" size={28} />
                            </TouchableOpacity>
                        );
                    },
                })}
            />
            <HomeStack.Screen 
                name="Settings"
                component={SettingsScreen}
            />
            <HomeStack.Screen 
                name="Movements"
                component={MovementsScreen}
            />


        </HomeStack.Navigator>
    )
}

const styles = StyleSheet.create({
	hederMenuIcon: {
		color: Colors.lightGray
	},
	headerIconContainer: {
		marginHorizontal: 15
	},
	headerTitle: {
		alignItems: 'center'
	}
});

export default HomeStackNavigator;
