import React, { FunctionComponent } from 'react';
import { NavigationContainer } from '@react-navigation/native'

import AuthStackNavigator from './auth';

const Navigator: FunctionComponent = () => {
    return (
        <NavigationContainer>
            <AuthStackNavigator />
        </NavigationContainer>
    );
};

export default Navigator;
