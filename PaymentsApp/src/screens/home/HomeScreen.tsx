import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { Colors } from '../../styles';
import { HomeScreenNavigationProp } from '../../navigation/main/types';
import RecentTransactions from '../../components/home/RecentTransactions';
import Welcome from '../../components/home/Welcome';

interface HomeScreenProps {
	navigation: HomeScreenNavigationProp;
}

const HomeScreen: FunctionComponent<HomeScreenProps> = ({ navigation }) => {
	const movements = [
		{
			id: 1,
			holder: 'Mauricio Fullana',
			reference: 'Pago Colegio',
			date: new Date(),
			amount: 550.0,
			isDebit: true,
		},
		{
			id: 2,
			holder: 'Sebastian Fernandéz',
			reference: 'Alquiler casa Montevideo',
			date: new Date(),
			amount: 680.0,
			isDebit: true,
		},
		{
			id: 3,
			holder: 'Horacio Peralta',
			reference: 'Test credito',
			date: new Date(),
			amount: 15500.0,
			isDebit: false,
		},
		{
			id: 4,
			holder: 'Alvaro Recoba',
			reference: 'Pago por clase de tiros libres',
			date: new Date(),
			amount: 15500.0,
			isDebit: true,
		},
		{
			id: 5,
			holder: 'Luis Suarez',
			reference: 'Referencia',
			date: new Date(),
			amount: 50600.0,
			isDebit: false,
		},
	];

	return (
		<View style={styles.container}>
			<Welcome />
			<View style={styles.divider} />
			<View style={styles.recentTrasnsactionsContainer}>
				<RecentTransactions movements={movements} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.screenBackground,
	},
	logoContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 20,
		borderColor: 'blue',
		borderWidth: 1,
	},
	imgLogo: {
		width: '50%',
		height: undefined,
		aspectRatio: 598 / 176,
	},
	welcome: {
		marginTop: 40,
		flexDirection: 'row',
		justifyContent: 'center',
	},
	actionsContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: 'red',
		borderWidth: 1,
	},
	recentTrasnsactionsContainer: {
		flex: 2,
	},
	welcomePicContainer: {
		justifyContent: 'center',
	},
	img: {
		width: 95,
		height: 95,
		borderRadius: 50,
		borderColor: Colors.mediumGray,
		borderWidth: 1,
	},
	welcomeTextContainer: {
		marginLeft: 10,
		justifyContent: 'center',
	},
	divider: {
		//marginVertical: 40,
		marginTop: 45,
		alignSelf: 'stretch',
	},
	actionsIconContainer: {
		flexDirection: 'row',
	},
	action: {
		alignItems: 'center',
		marginHorizontal: 20,
	},
	iconContainer: {
		marginBottom: 10,
		borderRadius: 50,
		borderColor: Colors.lightGray,
		borderWidth: 1.2,
	},
	icon: {
		padding: 5,
		backgroundColor: 'transparent',
	},
	sectionText: {
		color: Colors.lightGray,
	},
});

export default HomeScreen;
