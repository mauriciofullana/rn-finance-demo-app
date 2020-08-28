import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { useDispatch, useSelector } from 'react-redux';

import { Colors } from '../styles';
import { commonSelector } from '../state/selectors';

interface ISpinnerProps {
	text?: string;
}

const bkSpinner: FunctionComponent<ISpinnerProps> = ({ text }) => {
	const { loading } = useSelector(commonSelector);

	return (
		<Spinner
			visible={loading}
			textContent={text}
			textStyle={styles.spinnerTextStyle}
			color="#ff4800"
			overlayColor="rgba(0, 0, 0, 0.50)"
		/>
	);
};

const styles = StyleSheet.create({
	spinnerTextStyle: {
		color: Colors.main,
	},
});

export default bkSpinner;
