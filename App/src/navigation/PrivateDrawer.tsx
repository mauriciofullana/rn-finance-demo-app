import React, { FunctionComponent } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { DraweParamList } from './types';
import MainNavigator from './main';
import DrawerContent from './Common/DrawerContent';
import UserProfileStackNavigator from './userProfile';
import HomeStackNavigator from './home';
import ProductsStackNavigator from './products';

const DrawerNav = createDrawerNavigator<DraweParamList>();

const DrawerNavigator: FunctionComponent = () => {
	return (
		<DrawerNav.Navigator
			drawerContent={(props) => {
				return <DrawerContent {...props} />;
			}}
		>
			<DrawerNav.Screen name="HomeScreen" component={HomeStackNavigator} />
			<DrawerNav.Screen name="ProductsScreen" component={ProductsStackNavigator} />
			<DrawerNav.Screen name="UserProfile" component={UserProfileStackNavigator} />
		</DrawerNav.Navigator>
	);
};

export default DrawerNavigator;
