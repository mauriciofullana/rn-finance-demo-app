import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { movements as movementsAction } from '../../state/movements/actions';
import { Colors } from '../../styles';
import { HomeScreenNavigationProp } from '../../navigation/home/types';
import RecentTransactions from '../../components/home/RecentTransactions';
import ProductsCarousel from '../../components/home/ProductsCarousel';
import { movementsSelector } from '../../state/selectors';
import { Ionicons } from '@expo/vector-icons';
import { baseFontSize } from '../../styles/typography';

interface HomeScreenProps {
	navigation: HomeScreenNavigationProp;
}

const HomeScreen: FunctionComponent<HomeScreenProps> = ({ navigation }) => {
	const dispatch = useDispatch();
	const { movements } = useSelector(movementsSelector);

	useEffect(() => {
		dispatch(movementsAction());
	}, [dispatch]);

	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.accountsLinkContainer} onPress={()=>navigation.navigate('ProductsList')}>
				<Text style={styles.accountsLinkText}>MIS CUENTAS</Text>
				<Ionicons
					style={{ paddingTop: 0.7 }}
					name="ios-arrow-forward"
					size={18}
					color={Colors.mediumGray}
				/>
			</TouchableOpacity>
			<View style={styles.productsCarouselContainer}>
				<ProductsCarousel />
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
	accountsLinkContainer: {
		flexDirection: 'row',
		alignSelf: 'center',
	},
	accountsLinkText: {
		color: Colors.mediumGray,
		fontSize: baseFontSize,
		marginRight: 10,
	},
	productsCarouselContainer: {
		marginTop: 10,
	},
	recentTrasnsactionsContainer: {
		flex: 1,
		marginTop: 30,
	},
});

export default HomeScreen;
