import React, { FunctionComponent } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { DraweParamList } from './types';
import MainNavigator from './main';
import DrawerContent from './Common/DrawerContent';

const DrawerNav = createDrawerNavigator<DraweParamList>();

const DrawerNavigator: FunctionComponent = () => {
	return (
		<DrawerNav.Navigator
			drawerContent={(props) => {
				return <DrawerContent {...props} />;
			}}
		>
			<DrawerNav.Screen name="HomeScreen" component={MainNavigator} />
		</DrawerNav.Navigator>
	);
};

export default DrawerNavigator;
