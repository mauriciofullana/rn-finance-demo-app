import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ChargesStackParamList } from './types';
import ChargeListScreen from '../../screens/charge/ChargeListScreen';
import ChargeScreen from '../../screens/charge/ChargeScreen';
import {
	ScreenHeaderCommonOptions,
	StackCommonOptions,
} from '../Common/CommonHeaderOption';

const ChargesStack = createStackNavigator<ChargesStackParamList>();

const ChargesStackNavigator: FunctionComponent = () => {
	return (
		<ChargesStack.Navigator
			initialRouteName="ChargesList"
			screenOptions={StackCommonOptions()}
		>
			<ChargesStack.Screen
				name="ChargesList"
				component={ChargeListScreen}
				options={() => ScreenHeaderCommonOptions({ title: 'Cobros' })}
			/>
			<ChargesStack.Screen
				name="Charge"
				component={ChargeScreen}
				options={() => ({
					headerTitle: 'Cobros',
				})}
			/>
		</ChargesStack.Navigator>
	);
};

export default ChargesStackNavigator;
