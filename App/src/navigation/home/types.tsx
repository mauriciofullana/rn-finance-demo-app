import { StackNavigationProp } from '@react-navigation/stack';

export type HomeStackParamList = {
	Home: undefined;
	ProductsList: undefined;
	Movements: undefined;
	Settings: undefined;
};

export type HomeNavigationProp = StackNavigationProp<HomeStackParamList>;

export type HomeScreenNavigationProp = StackNavigationProp<
    HomeStackParamList,
	'Home'
>;
