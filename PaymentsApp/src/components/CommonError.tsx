import React, { FunctionComponent } from 'react';
import { Alert } from 'react-native';
import { CLEAR_ERROR } from '../state/common/types';

interface ICommonErrorPros {
    errorMessage: string,
    callBackFunction: Function
}

const CommonError: FunctionComponent<ICommonErrorPros> = ({errorMessage, callBackFunction}) => {

    return <>
        {
            Alert.alert(
                'Error', 
                errorMessage, 
                [{
                    text: 'OK',
                    onPress: () => callBackFunction()
                }]
            )
        }
    </>
};

export default CommonError;
