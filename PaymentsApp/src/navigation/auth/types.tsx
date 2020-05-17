import { StackNavigationProp } from '@react-navigation/stack';

export type AuthStackParamList = {
	Login: undefined;
	Forgot: undefined;
};

export type LoginScreenNavigationProp = StackNavigationProp<
	AuthStackParamList,
	'Login'
>;
