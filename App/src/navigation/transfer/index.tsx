import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TransferStackParamList } from './types';
import TransferInitialScreen from '../../screens/transfer/TransferInitialScreen';
import {
	ScreenHeaderCommonOptions,
	StackCommonOptions,
} from '../Common/CommonHeaderOption';

const TransferStack = createStackNavigator<TransferStackParamList>();

const TransferStackNavigator: FunctionComponent = () => {
	return (
		<TransferStack.Navigator
			initialRouteName="TransferInital"
			screenOptions={StackCommonOptions()}
		>
			<TransferStack.Screen
				name="TransferInital"
				component={TransferInitialScreen}
				options={() => ScreenHeaderCommonOptions({ title: 'Transferencia cuentas propias' })}
			/>
		</TransferStack.Navigator>
	);
};

export default TransferStackNavigator;
