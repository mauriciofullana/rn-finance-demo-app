import { StackNavigationProp } from '@react-navigation/stack';

export type ProductsStackParamList = {
	ProductsList: undefined;
	ProductDetail: undefined;
};

export type ProductsNavigationProp = StackNavigationProp<ProductsStackParamList>;
