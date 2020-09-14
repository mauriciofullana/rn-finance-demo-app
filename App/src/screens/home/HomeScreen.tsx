import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { movements as movementsAction } from '../../state/movements/actions';
import { products as productsAction } from '../../state/products/actions';
import { Colors } from '../../styles';
import { HomeScreenNavigationProp } from '../../navigation/home/types';
import RecentMovements from '../../components/home/RecentMovements';
import ProductsCarousel from '../../components/home/ProductsCarousel';
import { movementsSelector, productsSelector } from '../../state/selectors';
import { Ionicons } from '@expo/vector-icons';
import { baseFontSize } from '../../styles/typography';
import { IMovement } from '../../state/movements/types';

interface HomeScreenProps {
	navigation: HomeScreenNavigationProp;
}

const HomeScreen: FunctionComponent<HomeScreenProps> = ({ navigation }) => {
	const dispatch = useDispatch();
	const [activeProdutId, setActiveProdutId] = useState('');
	const { movements } = useSelector(movementsSelector);
	const { products } = useSelector(productsSelector);

	var activeMovements: IMovement[] = [];
	// MovementsFilter
	if (movements.length > 0) {
		activeMovements = movements.filter((movement) => {
			if (activeProdutId === '') {
				setActiveProdutId(products[0]._id);
				return;
			}

			return movement.productId == activeProdutId;
		});
	}

	useEffect(() => {
		dispatch(productsAction());
		dispatch(movementsAction());
	}, [dispatch]);

	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.accountsLinkContainer}
				onPress={() => navigation.navigate('ProductsList')}
			>
				<Text style={styles.accountsLinkText}>MIS CUENTAS</Text>
				<Ionicons
					style={{ paddingTop: 0.7 }}
					name="ios-arrow-forward"
					size={18}
					color={Colors.mediumGray}
				/>
			</TouchableOpacity>
			<View style={styles.productsCarouselContainer}>
				<ProductsCarousel
					products={products}
					selectedProductChange={setActiveProdutId}
				/>
			</View>

			<View style={styles.recentTrasnsactionsContainer}>
				<RecentMovements movements={activeMovements} />
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
