import { StackNavigationProp } from '@react-navigation/stack';

export type AuthStackParamList = {
	Login: undefined;
	Forgot: undefined;
	Signup: undefined;
	Settings: undefined;
};

export type SettingsStackParamList = {
	Settings: undefined;
};

export type LoginScreenNavigationProp = StackNavigationProp<
	AuthStackParamList,
	'Login'
>;
