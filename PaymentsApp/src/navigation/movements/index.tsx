import React, { FunctionComponent } from 'react';
import { StyleSheet, Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { MovementsStackParamList } from './types';
import MovementsScreen from '../../screens/movements/MovementsScreen';
import { Colors } from '../../styles';

const MovementsStack = createStackNavigator<MovementsStackParamList>();

const MovementsStackNavigator: FunctionComponent = () => {
    return (
        <MovementsStack.Navigator 
            initialRouteName="Movements"
            screenOptions={{
                headerBackTitleVisible: false,
                headerTitleAlign: 'center',
                headerStyle: {
                    elevation: Platform.OS === "ios" ? 0 : 4,
                    shadowOpacity: Platform.OS === "ios" ? 0 : 4,
                    borderBottomWidth: 0,
                    backgroundColor: Colors.screenBackground
                },
                headerTintColor: Colors.lightGray
            }}
        >
            <MovementsStack.Screen
                name="Movements"
                component={MovementsScreen}
                options={() => ({
                    headerTitle: 'Movimientos'
                })}          
            />
        </MovementsStack.Navigator>
    )
};

export default MovementsStackNavigator;
