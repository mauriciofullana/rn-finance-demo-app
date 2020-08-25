import React, { FunctionComponent } from 'react';
import { Alert, StyleSheet, Text, Modal } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { useDispatch, useSelector } from 'react-redux';

import { CLEAR_ERROR } from '../state/common/types';
import { commonSelector } from '../state/selectors';
import { Colors } from '../styles';
import { View } from 'react-native-animatable';

const CommonResult: FunctionComponent = () => {
	const dispatch = useDispatch();
	const { error, errorMessage, message, loading } = useSelector(commonSelector);

	return (
		<>
			{error &&
				Alert.alert('Error', errorMessage, [
					{
						text: 'OK',
						onPress: () => dispatch({ type: CLEAR_ERROR }),
					},
				])}
			{loading && (
				<Modal>
					<Text>TU VIEJA</Text>
				</Modal>
			)}
		</>
	);
};

const styles = StyleSheet.create({
	spinnerTextStyle: {
		color: Colors.main,
	},
});

export default CommonResult;
