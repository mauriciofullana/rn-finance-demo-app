import React, { FunctionComponent } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { CLEAR_RESULT } from '../state/common/types';
import { commonSelector } from '../state/selectors';

const CommonResult: FunctionComponent = () => {
	const dispatch = useDispatch();
	const { showResult, error, message } = useSelector(commonSelector);

	const alertTitle = error ? 'Error' : '';

	return (
		<>
			{showResult &&
				Alert.alert(alertTitle, message, [
					{
						text: 'OK',
						onPress: () => dispatch({ type: CLEAR_RESULT }),
					},
				])}
		</>
	);
};

export default CommonResult;
