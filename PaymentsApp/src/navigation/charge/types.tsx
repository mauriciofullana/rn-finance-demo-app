import { StackNavigationProp } from '@react-navigation/stack';

export type ChargeStackParamList = {
    QRList: undefined;
	New: undefined;
	Edit: undefined;
};

export type QRListScreenNavigationProp = StackNavigationProp<
    ChargeStackParamList,
	'QRList'
>;
