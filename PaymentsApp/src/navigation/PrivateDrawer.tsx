import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { DraweParamList } from './types';
import MainNavigator from './main';
import MovementsScreen from '../screens/movements/MovementsScreen';

const Drawer = createDrawerNavigator<DraweParamList>();

const DrawerNavigator = () => {
	return (
		<Drawer.Navigator initialRouteName="Home">
			<Drawer.Screen name="Home" component={MainNavigator} />
			{/* <Drawer.Screen name="Movements" component={MovementsScreen} /> */}
		</Drawer.Navigator>
	);
};

export default DrawerNavigator;
