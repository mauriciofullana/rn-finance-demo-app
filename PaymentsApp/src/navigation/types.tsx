import { DrawerNavigationProp } from '@react-navigation/drawer';

export type DraweParamList = {
	HomeScreen: undefined;
	Charge: undefined;
	Pay: undefined;
	Movements: undefined;
};

export type PrivateDrawerNavigationProp = DrawerNavigationProp<DraweParamList>;

// export type PrivateDrawerNavigationProp = DrawerNavigationProp<
// 	DraweParamList,
// 	'Home'
// >;
