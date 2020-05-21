import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { DraweParamList } from './types';
import MainNavigator from './main';

const Drawer = createDrawerNavigator<DraweParamList>();

const DrawerNavigator = () => {
	return (
		<Drawer.Navigator initialRouteName="Home">
			<Drawer.Screen name="Home" component={MainNavigator} />
		</Drawer.Navigator>
	);
};

export default DrawerNavigator;
