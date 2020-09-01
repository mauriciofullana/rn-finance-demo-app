import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../styles';

interface IProductsCarouselItemProps {
	item: any;
}

const ProductsCarouselItem: FunctionComponent<IProductsCarouselItemProps> = ({
	item,
}) => {
	return (
		<View style={styles.container}>
			<Text style={styles.header}>{`${item.type} ${item.accountNumber}`}</Text>
			<View style={styles.amountContainer}>
				<Text style={styles.amountText}>{item.amount}</Text>
				<Text style={styles.currencyText}>{item.currency}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: 130,
		width: '100%',
		justifyContent: 'center',
		borderRadius: 10,
		paddingLeft: 30,
	},
	header: {
		color: Colors.baseText,
		marginBottom: 5,
	},
	amountContainer: {
		flexDirection: 'row',
		alignItems: 'flex-end',
	},
	amountText: {
		color: Colors.baseText,
		fontSize: 40,
		marginRight: 7,
	},
	currencyText: {
		color: Colors.baseText,
		fontSize: 25,
		paddingBottom: 3,
	},
});

export default ProductsCarouselItem;
