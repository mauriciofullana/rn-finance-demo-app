import React, { FunctionComponent } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	Dimensions,
	FlatList,
	StyleSheet,
	ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Colors } from '../../styles';
import { mediumRadius } from '../../styles/spacing';
import { IProduct } from '../../state/products/types';
import { largeFontSize } from '../../styles/typography';
import { useSelector } from 'react-redux';
import { productsSelector } from '../../state/selectors';

const { width, height } = Dimensions.get('window');

interface IAccountSelectorModalProps {
	closeModal: Function;
}

const renderSeparator = () => {
	return <View style={styles.listItemSeparetor} />;
};

const AccountSelectorModal: FunctionComponent<IAccountSelectorModalProps> = ({
	closeModal,
}) => {
	const { products } = useSelector(productsSelector);

	const renderProducts = () => {
		return products.map((product) => renderProduct(product));
	};

	const renderProduct = (product: IProduct) => {
		return (
			<TouchableOpacity
				style={{ marginHorizontal: 10, height: 120 }}
				onPress={() => closeModal()}
				key={product._id}
			>
				<View
					style={{
						flexDirection: 'row',
						marginTop: 15,
					}}
				>
					<View style={{ flex: 1, marginLeft: 10 }}>
						<Text style={{ color: Colors.baseText, marginBottom: 3 }}>
							{product.productType}
						</Text>
						<Text style={{ color: Colors.mediumGray }}>{product.alias}</Text>
						<Text style={{ color: Colors.mediumGray }}>
							{'XXXX-' +
								product.productNumber.substr(product.productNumber.length - 3)}
						</Text>
					</View>
					<View>
						<Ionicons name="ios-arrow-forward" size={18} color={Colors.main} />
					</View>
				</View>
				<View
					style={{
						flex: 1,
						alignItems: 'flex-end',
						justifyContent: 'flex-end',
						paddingBottom: 10,
					}}
				>
					<Text
						style={{ color: Colors.baseText, fontSize: largeFontSize }}
					>{`${product.currency} ${product.balance}`}</Text>
				</View>
			</TouchableOpacity>
		);
	};

	return (
		<View
			style={{
				height: '100%',
				width: '100%',
				marginTop: height / 1.5,
				backgroundColor: Colors.screenBackground,
				borderRadius: mediumRadius,
			}}
		>
			<View style={{ flex: 1 }}>
				<View
					style={{
						height: 50,
						width: '100%',
						backgroundColor: Colors.screenBackground,
						borderTopRightRadius: mediumRadius,
						borderTopLeftRadius: mediumRadius,
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Text style={{ color: Colors.mediumGray }}>
						SELECCIONE UNA CUENTA
					</Text>
				</View>
				<View
					style={{
						borderColor: Colors.mediumGray,
						borderWidth: 0.3,
						marginBottom: 10,
					}}
				/>
				<View style={{ flex: 1 }}>{renderProducts()}</View>
				{/* <FlatList
					data={products}
					keyExtractor={(product) => product._id.toString()}
					renderItem={(product) => renderProduct(product.item)}
					ItemSeparatorComponent={renderSeparator}
					showsVerticalScrollIndicator={false}
				/> */}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	listItemSeparetor: {
		borderColor: Colors.lightGray,
		borderWidth: 0.5,
		opacity: 0.3,
	},
});

export default AccountSelectorModal;
