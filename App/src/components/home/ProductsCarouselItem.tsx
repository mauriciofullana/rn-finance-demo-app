import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../styles';
import * as Animatable from 'react-native-animatable';

interface IProductsCarouselItemProps {
	item: any;
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
			<View style={{ height: 20 }}>
				{active && (
					<Animatable.Text
						duration={fedeInRight ? 500 : 300}
						//style={styles.typeCount}
						animation={fedeInRight ? 'fadeInRightBig' : 'fadeInLeftBig'}
						direction="alternate"
					>
						<Text
							style={styles.header}
						>{`${item.type}  ${item.accountNumber}`}</Text>
					</Animatable.Text>
				)}
			</View>
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
