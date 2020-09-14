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
import { View } from 'react-native-animatable';

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
					<View style={styles.imgBorder}>
						<Image
							style={styles.img}
							source={require('../../../assets/pic.jpeg')}
						/>
					</View>
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
	},
	imgBorder: {
		borderWidth: 1,
		borderColor: Colors.main,
		borderRadius: 75,
	},
	img: {
		width: 130,
		height: 130,
		borderRadius: 75,
		borderColor: Colors.screenBackground,
		borderWidth: 3,
	},
	userPicContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 15,
		padding: 10,
	},
});

export default UserProfileScreen;
