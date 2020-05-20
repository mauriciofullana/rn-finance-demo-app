import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { Colors } from '../styles';

interface ISpinnerProps {
    visible: boolean;
    text: string;
}

const bkSpinner: FunctionComponent<ISpinnerProps> = ({ visible, text }) => {
	return (
		<Spinner
			visible={visible}
			//textContent={text}
			textStyle={styles.spinnerTextStyle}
			color="#ff4800"
            overlayColor="rgba(0, 0, 0, 0.50)"
		/>
	);
};

const styles = StyleSheet.create({
	spinnerTextStyle: {
		color: Colors.main
	}
});

export default bkSpinner;
