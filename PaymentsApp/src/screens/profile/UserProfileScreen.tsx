import React, { FunctionComponent, useState } from 'react';
import {
	StyleSheet,
	Image,
	KeyboardAvoidingView,
	Platform,
} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';

import { pageHorizontalPadding, pageTopPadding } from '../../styles/spacing';
import { Colors } from '../../styles';
import UserForm from '../../components/user/UserForm';
import { authSelector } from '../../state/selectors';
import { useSelector } from 'react-redux';

const UserProfileScreen: FunctionComponent = () => {
	const { user } = useSelector(authSelector);
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
					{/* <FontAwesome name="user-circle-o" color={Colors.lightGray} size={130} /> */}
				</TouchableOpacity>
				<UserForm
					formButtonText="ACTUALIZAR"
					formButtonCallback={() => {}}
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
