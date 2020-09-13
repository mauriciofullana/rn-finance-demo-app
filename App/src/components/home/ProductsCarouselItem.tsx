import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../styles';
import * as Animatable from 'react-native-animatable';
import { IProduct } from '../../state/products/types';

interface IProductsCarouselItemProps {
	item: IProduct;
	active: boolean;
	fedeInRight: boolean;
}

const ProductsCarouselItem: FunctionComponent<IProductsCarouselItemProps> = ({
	item,
	active,
	fedeInRight,
}) => {
	return (
		<View style={styles.container}>
			<View style={styles.amountContainer}>
				<Text style={styles.currencyText}>
					{item.currency == 'UYU' ? '$' : 'US$'}
				</Text>
				<Text style={styles.amountText}>{item.balance}</Text>
			</View>
			<View style={{ height: 20, marginBottom: 10 }}>
				{active && (
					<Animatable.Text
						duration={fedeInRight ? 500 : 300}
						//style={styles.typeCount}
						animation={fedeInRight ? 'fadeInRightBig' : 'fadeInLeftBig'}
						direction="alternate"
					>
						<Text style={styles.header}>{`${item.productType}  ${
							'XXXX-' + item.productNumber.substr(item.productNumber.length - 3)
						}`}</Text>
					</Animatable.Text>
				)}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: 110,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 10,
		// paddingLeft: 30,
	},
	header: {
		color: Colors.baseText,
	},
	amountContainer: {
		flexDirection: 'row',
		alignItems: 'flex-end',
		marginBottom: 10,
	},
	amountText: {
		color: Colors.baseText,
		fontSize: 40,
	},
	currencyText: {
		color: Colors.baseText,
		fontSize: 40,
		marginRight: 7,
	},
});

export default ProductsCarouselItem;
