import React, { FunctionComponent } from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { Colors } from '../../styles';
import { ChargesStackParamList } from './types';
import ChargeListScreen from '../../screens/charge/ChargeListScreen';
import ChargeScreen from '../../screens/charge/ChargeScreen';

const ChargesStack = createStackNavigator<ChargesStackParamList>();

const ChargesStackNavigator: FunctionComponent = () => {
    return (
        <ChargesStack.Navigator 
            initialRouteName="ChargesList"
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
            <ChargesStack.Screen
                name="ChargesList"
                component={ChargeListScreen}
                options={() => ({
                    headerTitle: 'Cobros'
                })}          
            />
            <ChargesStack.Screen
                name="Charge"
                component={ChargeScreen}
                options={() => ({
                    headerTitle: 'Cobros'
                })}          
            />
        </ChargesStack.Navigator>
    )
};

export default ChargesStackNavigator;
