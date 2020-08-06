import React, { FunctionComponent } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { authSelector } from '../state/selectors';
import AuthStackNavigator from './auth';
import PrivateDrawerNavigator from './PrivateDrawer';

const Navigator: FunctionComponent = () => {
	const { isSignedIn } = useSelector(authSelector);

	return (
		<NavigationContainer>
			{!isSignedIn && <AuthStackNavigator />}
			{isSignedIn && <PrivateDrawerNavigator />}
		</NavigationContainer>
	);
};

export default Navigator;
