import React, { useState, FunctionComponent } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import {
	Foundation,
	FontAwesome5,
	Ionicons,
	MaterialCommunityIcons,
} from '@expo/vector-icons';

import SearchBar from '../../components/SearchBar';
import { Colors } from '../../styles';
import { productsSelector } from '../../state/selectors';
import { IProduct } from '../../state/products/types';
import { baseFontSize, largeFontSize } from '../../styles/typography';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ProductsListScreen: FunctionComponent = () => {
	const [refreshing, setRefreshing] = useState(false);
	const { products } = useSelector(productsSelector);
	const [term, setTerm] = useState('');

	const onRefresh = () => {};
	const renderProduct = (product: IProduct) => {
		return (
			<TouchableOpacity style={{ marginHorizontal: 10, height: 120 }}>
				<View
					style={{
						flexDirection: 'row',
						marginTop: 15,
					}}
				>
					<View
						style={{
							width: 20,
							alignItems: 'center',
						}}
					>
						{renderIcon(product.productType)}
					</View>
					<View style={{ marginLeft: 10, flex: 1 }}>
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

	const renderSeparator = () => {
		return <View style={styles.listItemSeparetor} />;
	};

	const renderIcon = (productType: string) => {
		if (productType == 'CURRENT_ACCOUNT') {
			return <Foundation name="dollar" color={Colors.main} size={30} />;
		} else if (productType == 'SAVINGS_ACCOUNT') {
			return (
				<View>
					<FontAwesome5 name="piggy-bank" color={Colors.main} size={18} />
				</View>
			);
		} else if (productType == 'CREDIT_CARD') {
			return <Foundation name="credit-card" color={Colors.main} size={25} />;
		} else {
			return <View />;
		}
	};

	return (
		<View style={styles.container}>
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
				}}
			>
				<View style={{ flex: 1, alignItems: 'center' }}>
					<SearchBar term={term} onTermChange={setTerm} />
				</View>
				<TouchableOpacity style={{ marginLeft: 10 }}>
					<MaterialCommunityIcons
						name="filter-variant"
						size={35}
						color={Colors.mediumGray}
					/>
				</TouchableOpacity>
			</View>
			<FlatList
				data={products}
				onRefresh={onRefresh}
				refreshing={refreshing}
				keyExtractor={(product) => product._id.toString()}
				renderItem={(product) => renderProduct(product.item)}
				ItemSeparatorComponent={renderSeparator}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.screenBackground,
		paddingHorizontal: 15,
	},
	listItemSeparetor: {
		borderColor: Colors.lightGray,
		borderWidth: 0.5,
		opacity: 0.3,
	},
});

export default ProductsListScreen;
