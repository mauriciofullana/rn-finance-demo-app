import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
	DrawerContentOptions,
	DrawerContentComponentProps,
	DrawerContentScrollView,
	DrawerItem,
} from '@react-navigation/drawer';
import {
	Ionicons,
	MaterialCommunityIcons,
	MaterialIcons,
} from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { DrawerActions } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { logout } from '../../state/auth/actions';
import { Colors } from '../../styles';
import Welcome from '../../components/home/Welcome';

export default function DrawerContent(
	props: DrawerContentComponentProps<DrawerContentOptions>
) {
	const dispatch = useDispatch();
	const handleLogOut = () => {
		props.navigation.dispatch(DrawerActions.closeDrawer());
		dispatch(logout());
	};

	const renderDrawerItem = (
		label: string,
		navigateTo: string,
		renderBorder: boolean,
		icon: any
	) => {
		return (
			<DrawerItem
				style={renderBorder ? styles.drawerItem : null}
				label={label}
				inactiveTintColor={Colors.lightGray}
				activeTintColor={Colors.main}
				onPress={() => props.navigation.navigate(navigateTo)}
				icon={icon}
			/>
		);
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.welcomeContainer}
				onPress={() => props.navigation.navigate('UserProfile')}
			>
				<Welcome />
			</TouchableOpacity>
			<DrawerContentScrollView>
				<View>
					{renderDrawerItem('Inicio', 'Home', true, () => (
						<MaterialCommunityIcons
							name="home"
							color={Colors.lightGray}
							size={26}
						/>
					))}
					{renderDrawerItem('Mis Cuentas', 'ProductsScreen', true, () => (
						<MaterialCommunityIcons
							name="bank"
							color={Colors.lightGray}
							size={26}
						/>
					))}
					{renderDrawerItem('Transferir', 'Transfer', true, () => (
						<MaterialCommunityIcons
							name="bank-transfer-out"
							color={Colors.lightGray}
							size={26}
						/>
					))}
					{/* {renderDrawerItem('Cobrar', 'ChargeList', true, () => (
						<MaterialCommunityIcons
							name="qrcode"
							color={Colors.lightGray}
							size={26}
						/>
					))}
					{renderDrawerItem('Pagar', 'Pay', true, () => (
						<MaterialIcons
							name="attach-money"
							color={Colors.lightGray}
							size={26}
						/>
					))} */}
					{renderDrawerItem('Historial', 'Movements', true, () => (
						<MaterialCommunityIcons
							name="format-list-bulleted"
							color={Colors.lightGray}
							size={26}
						/>
					))}
					{renderDrawerItem('Ajustes', 'Settings', false, () => (
						<MaterialIcons name="settings" color={Colors.lightGray} size={26} />
					))}
				</View>
			</DrawerContentScrollView>
			<DrawerItem
				style={{
					marginBottom: 10,
					marginLeft: 12,
					borderTopColor: Colors.mediumGray,
					borderTopWidth: 0.5,
				}}
				labelStyle={{ fontWeight: 'bold' }}
				label="Salir"
				inactiveTintColor={Colors.mediumGray}
				activeTintColor={Colors.main}
				onPress={() => handleLogOut()}
				icon={() => (
					<Ionicons name="ios-log-out" size={28} color={Colors.mediumGray} />
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.screenBackground,
	},
	welcomeContainer: {
		backgroundColor: Colors.darkestGray,
		paddingTop: 40,
		paddingBottom: 20,
	},
	drawerItem: {
		borderBottomColor: Colors.mediumGray,
		borderBottomWidth: 0.3,
	},
});
