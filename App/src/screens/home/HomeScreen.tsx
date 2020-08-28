import React, { FunctionComponent, useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { movements as movementsAction } from '../../state/movements/actions';
import { Colors } from '../../styles';
import { HomeScreenNavigationProp } from '../../navigation/main/types';
import RecentTransactions from '../../components/home/RecentTransactions';
import Welcome from '../../components/home/Welcome';
import { movementsSelector } from '../../state/selectors';

interface HomeScreenProps {
	navigation: HomeScreenNavigationProp;
}

const HomeScreen: FunctionComponent<HomeScreenProps> = () => {
	const dispatch = useDispatch();
	const { movements } = useSelector(movementsSelector);

	useEffect(() => {
		dispatch(movementsAction());
	}, [dispatch]);

	return (
		<View style={styles.container}>
			<View style={styles.logoContainer}>
				<Image
					style={styles.imgLogo}
					source={require('../../../assets/logo2.png')}
				/>
			</View>
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
		alignItems: 'center',
		paddingHorizontal: 25,
	},
	imgLogo: {
		width: '50%',
		height: undefined,
		aspectRatio: 598 / 176,
	},
	recentTrasnsactionsContainer: {
		flex: 1,
		marginTop: 45,
	},
});

export default HomeScreen;
