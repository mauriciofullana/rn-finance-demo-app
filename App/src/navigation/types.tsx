import { DrawerNavigationProp } from '@react-navigation/drawer';

export type DraweParamList = {
	HomeScreen: undefined;
	ProductsScreen: undefined;
	Transfer: undefined;
	Charge: undefined;
	Pay: undefined;
	Movements: undefined;
	UserProfile: undefined;
};

export type PrivateDrawerNavigationProp = DrawerNavigationProp<DraweParamList>;

// export type PrivateDrawerNavigationProp = DrawerNavigationProp<
// 	DraweParamList,
// 	'Home'
// >;
