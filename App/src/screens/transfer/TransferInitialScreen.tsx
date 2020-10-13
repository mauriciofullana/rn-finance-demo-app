import React, { FunctionComponent, useState, useRef } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Dimensions,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Modal from 'react-native-modal';

import { Modalize } from 'react-native-modalize';

import { Colors } from '../../styles';
import { pageHorizontalPadding, pageTopPadding } from '../../styles/spacing';
import { baseFontSize, extraLargeFontSize } from '../../styles/typography';
import FloatingTitleTextInput from '../../components/form/FloatingTitleTextInput';
import AccountSelectorModal from '../../components/modal/AccountSelectorModal';
import FormButton from '../../components/form/FormButton';

const TransferInitialScreen: FunctionComponent = () => {
	const [modalAccountVisible, setModalAccountVisible] = useState(false);
	const modalizeRef = useRef<Modalize>(null);

	const onOpen = () => {
		modalizeRef.current?.open();
	};

	return (
		<View style={styles.container}>
			<View style={styles.formContainer}>
				<View style={styles.accountContainer}>
					{/* <Text style={styles.inputIndicatorText}>Desde:</Text> */}
					<TouchableOpacity
						style={styles.accountSelectorContainer}
						onPress={() => onOpen()}
						// onPress={() => setModalAccountVisible(true)}
					>
						<Text style={styles.accountSelectorText}>Cuenta Origen</Text>
						<MaterialIcons
							name="keyboard-arrow-down"
							size={30}
							color={Colors.mediumGray}
						/>
					</TouchableOpacity>
				</View>
				<View style={styles.accountContainer}>
					{/* <Text style={styles.inputIndicatorText}>Hacia:</Text> */}
					<TouchableOpacity style={styles.accountSelectorContainer}>
						<Text style={styles.accountSelectorText}>Cuenta Destino</Text>
						<MaterialIcons
							name="keyboard-arrow-down"
							size={30}
							color={Colors.mediumGray}
						/>
					</TouchableOpacity>
				</View>
				<View style={styles.amountContainer}>
					<TouchableOpacity style={styles.amountTextContainer}>
						<Text style={styles.amountText}>$ 0.00</Text>
					</TouchableOpacity>
				</View>
				<FloatingTitleTextInput
					value={''}
					onChangeValue={() => {}}
					placeHolderText="Descripción"
					errorMessage={''}
				/>
			</View>
			<FormButton
				isDisabled={() => false}
				onPressCallback={() => {}}
				text="CONTINUAR"
			/>

			{/* <Modalize ref={modalizeRef}>
				<AccountSelectorModal
					closeModal={() => setModalAccountVisible(false)}
				/>
			</Modalize> */}
			<Modal
				isVisible={modalAccountVisible}
				backdropOpacity={0.5}
				style={{ margin: 0 }}
				hideModalContentWhileAnimating={true}
				animationIn="fadeInUp"
				animationOut="fadeOutDown"
			>
				<AccountSelectorModal
					closeModal={() => setModalAccountVisible(false)}
				/>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.screenBackground,
		paddingHorizontal: pageHorizontalPadding,
		paddingTop: pageTopPadding,
	},
	formContainer: {
		marginBottom: 50,
	},
	accountContainer: {
		marginBottom: 40,
	},
	inputIndicatorText: {
		//marginLeft: 10,
		marginBottom: 10,
		color: Colors.lightGray,
		fontSize: baseFontSize,
	},
	accountSelectorContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomColor: Colors.lightGray,
		borderBottomWidth: 0.4,
	},
	accountSelectorText: {
		color: Colors.mediumGray,
		fontSize: baseFontSize,
		flex: 1,
		paddingTop: 10,
		paddingRight: 10,
		paddingBottom: 10,
		paddingLeft: 5,
	},
	amountContainer: {
		marginBottom: 20,
	},
	amountTextContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	amountText: {
		color: Colors.mediumGray,
		fontSize: extraLargeFontSize,
		flex: 1,
		paddingTop: 10,
		paddingRight: 10,
		paddingBottom: 10,
		paddingLeft: 5,
	},
	inputIcon: {
		padding: 5,
	},
});

export default TransferInitialScreen;
