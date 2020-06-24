import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import QrListScreen from '../../screens/charge/QrListScreen';
import { ChargeStackParamList } from './types';
import { Colors } from '../../styles';

const ChargeStack = createStackNavigator<ChargeStackParamList>();

const ChargeStackNavigator: FunctionComponent = () => {
	return (
		<ChargeStack.Navigator
            initialRouteName="QRList"
            screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.screenBackground,
                },
                headerTintColor: Colors.white
			}}
		>
            <ChargeStack.Screen
                name="QRList"
                component={QrListScreen}
                options={{
                    header: () => null
                }}
            />
        </ChargeStack.Navigator>
	);
};

export default ChargeStackNavigator;
