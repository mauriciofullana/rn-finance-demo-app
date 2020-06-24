import React, { FunctionComponent } from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { useSelector } from "react-redux";

import { authSelector } from '../state/selectors';
import AuthStackNavigator from './auth';
import MainNavigator from './main';

const Navigator: FunctionComponent = () => {

    const { isSignedIn } = useSelector(authSelector);

    return (
        // <NavigationContainer theme={DarkTheme}>
        <NavigationContainer>
            {!isSignedIn && <AuthStackNavigator />}
            {isSignedIn && <MainNavigator />}
        </NavigationContainer>
    );
};

export default Navigator;
