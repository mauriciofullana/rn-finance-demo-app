import React, { FunctionComponent } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { CLEAR_ERROR } from '../state/common/types';
import { commonSelector } from '../state/selectors';

const CommonError: FunctionComponent = () => {
	const dispatch = useDispatch();
	const { error, errorMessage } = useSelector(commonSelector);

	return (
		<>
			{error &&
				Alert.alert('Error', errorMessage, [
					{
						text: 'OK',
						onPress: () => dispatch({ type: CLEAR_ERROR }),
					},
				])}
		</>
	);
};

export default CommonError;
