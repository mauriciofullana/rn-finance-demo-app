import React, { FunctionComponent, useState } from 'react';
import {
	StyleSheet,
	Image,
	KeyboardAvoidingView,
	Platform,
} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';

import { pageHorizontalPadding, pageTopPadding } from '../../styles/spacing';
import { Colors } from '../../styles';
import UserForm from '../../components/user/UserForm';
import { authSelector } from '../../state/selectors';
import { useSelector } from 'react-redux';
import { updateUser } from '../../state/auth/actions';

const UserProfileScreen: FunctionComponent = () => {
	const { user } = useSelector(authSelector);
	const dispatch = useDispatch();
	const keyboardVerticalOffset = Platform.OS === 'ios' ? 100 : 0;
	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS === 'ios' ? 'padding' : undefined}
			enabled
			keyboardVerticalOffset={keyboardVerticalOffset}
		>
			<ScrollView showsVerticalScrollIndicator={false}>
				<TouchableOpacity
					style={styles.userPicContainer}
					// onPress={takeImageHandler}
				>
					<Image
						style={styles.img}
						source={require('../../../assets/chino.png')}
					/>
				</TouchableOpacity>
				<UserForm
					formButtonText="ACTUALIZAR"
					formButtonCallback={(
						id: string,
						name: string,
						lastName: string,
						email: string,
						userName: string
					) => {
						dispatch(updateUser({ id, name, lastName, email, userName }));
					}}
					user={user}
					updatePassword={false}
				/>
			</ScrollView>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.screenBackground,
		paddingHorizontal: pageHorizontalPadding,
		paddingTop: pageTopPadding,
	},
	img: {
		width: 130,
		height: 130,
		borderRadius: 65,
		borderColor: Colors.mediumGray,
		borderWidth: 2,
	},
	userPicContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 15,
	},
});

export default UserProfileScreen;
