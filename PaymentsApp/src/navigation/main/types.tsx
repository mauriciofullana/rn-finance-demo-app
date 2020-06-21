import { StackNavigationProp } from '@react-navigation/stack';

export type MainStackParamList = {
    Home: undefined;
    Charge: undefined;
    Pay: undefined;
    Movements: undefined
};

export type MainNavigationProp = StackNavigationProp<MainStackParamList>;

export type HomeScreenNavigationProp = StackNavigationProp<
    MainStackParamList,
	'Home'
>;
