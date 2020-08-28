import { StackNavigationProp } from '@react-navigation/stack';

export type MainStackParamList = {
    Home: undefined;
    ChargeList: undefined;
    Charge: undefined;
    Pay: undefined;
    Movements: undefined
};

export type MainNavigationProp = StackNavigationProp<MainStackParamList>;

export type HomeScreenNavigationProp = StackNavigationProp<
    MainStackParamList,
	'Home'
>;

export type ChargeListScreenNavigationProp = StackNavigationProp<
    MainStackParamList,
	'ChargeList'
>;
