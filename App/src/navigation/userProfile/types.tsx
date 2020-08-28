import { StackNavigationProp } from '@react-navigation/stack';

export type UserProfileStackParamList = {
	UserProfile: undefined;
};

export type UserProfileNavigationProp = StackNavigationProp<
	UserProfileStackParamList,
	'UserProfile'
>;
