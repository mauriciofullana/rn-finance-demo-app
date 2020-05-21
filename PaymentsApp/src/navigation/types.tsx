import { DrawerNavigationProp } from '@react-navigation/drawer';

export type DraweParamList = {
	Home: undefined;
};

export type PrivateDrawerNavigationProp = DrawerNavigationProp<DraweParamList>;

// export type PrivateDrawerNavigationProp = DrawerNavigationProp<
// 	DraweParamList,
// 	'Home'
// >;
