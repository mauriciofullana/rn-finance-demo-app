import { StackNavigationProp } from '@react-navigation/stack';

export type MovementsStackParamList = {
    Movements: undefined
};

export type MovementsNavigationProp = StackNavigationProp<MovementsStackParamList>;

export type MovementsScreenNavigationProp = StackNavigationProp<
    MovementsStackParamList,
	'Movements'
>;
