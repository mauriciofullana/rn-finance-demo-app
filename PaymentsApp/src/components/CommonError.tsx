import React, { FunctionComponent } from 'react';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';

interface ICommonErrorProps {
    selector: any
    dispatchCallback: Function
}

const CommonError: FunctionComponent<ICommonErrorProps> = ({selector, dispatchCallback}) => {

    const { error, errorMessage } = useSelector(selector);

    return <>
        {
            !!error && 
            Alert.alert(
                'Error', 
                errorMessage, 
                [{
                    text: 'OK',
                    onPress: dispatchCallback()
                }]
            )
        }
    </>
};

export default CommonError;
