import React, { FunctionComponent } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	FlatList
} from 'react-native';
import {
	MaterialCommunityIcons,
	MaterialIcons,
	FontAwesome,
	AntDesign
} from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import { Colors } from '../../styles';
import { HomeScreenNavigationProp } from '../../navigation/main/types';

interface HomeScreenProps {
	navigation: HomeScreenNavigationProp;
}

const HomeScreen: FunctionComponent<HomeScreenProps> = ({ navigation }) => {
	const movements = [
		{
			id: 1,
			holder: 'Mauricio Fullana',
			reference: 'Pago Colegio',
			date: new Date(),
			amount: 550.0,
			isDebit: true
		},
		{
			id: 2,
			holder: 'Sebastian Fernandéz',
			reference: 'Alquiler casa Montevideo',
			date: new Date(),
			amount: 680.0,
			isDebit: true
		},
		{
			id: 3,
			holder: 'Horacio Peralta',
			reference: 'Test credito',
			date: new Date(),
			amount: 15500.0,
			isDebit: false
		},
		{
			id: 4,
			holder: 'Alvaro Recoba',
			reference: 'Pago por clase de tiros libres',
			date: new Date(),
			amount: 15500.0,
			isDebit: true
		},
		{
			id: 5,
			holder: 'Luis Suarez',
			reference: 'Referencia',
			date: new Date(),
			amount: 50600.0,
			isDebit: false
		}
	];

	const renderMovements = (movement: any) => {
		return (
			<View
				style={{
					flex: 1,
					height: 80,
					flexDirection: 'row',
					alignItems: 'center'
				}}
			>
				<View style={{ marginRight: 15, marginLeft: 10 }}>
					<Ionicons
						name={movement.isDebit ? 'ios-arrow-forward' : 'ios-arrow-back'}
						size={20}
						color={movement.isDebit ? '#bd0000' : 'green'}
					/>
				</View>
				<View style={{ flex: 1, alignItems: 'flex-start' }}>
					<Text style={{ fontWeight: 'bold' }}>{movement.holder}</Text>
					<Text style={{ color: '#9b9aa1' }}>{movement.reference}</Text>
				</View>
				<View style={{ flex: 1, alignItems: 'flex-end', marginRight: 10 }}>
					<Text
						style={{
							fontSize: 18,
							color: movement.isDebit ? '#bd0000' : 'green'
						}}
					>
						Bs {movement.isDebit ? '-' : ''}
						{movement.amount}
					</Text>
				</View>
			</View>
		);
	};

	const renderSeparator = () => {
		return (
			<View style={{ borderColor: Colors.mediumGray, borderWidth: 0.3 }} />
		);
	};

	return (
		<View style={styles.container}>
			<LinearGradient
				colors={['rgba(255,255,255,0.1)', 'rgba(38, 61, 94, 0.9)']}
				style={{ flex: 1 }}
			>
				<View style={styles.welcome}>
					<TouchableOpacity style={styles.welcomePicContainer}>
						<FontAwesome
							name="user-circle-o"
							color={Colors.mediumGray}
							size={60}
						/>
					</TouchableOpacity>
					<View style={styles.welcomeTextContainer}>
						<View style={{ flexDirection: 'row', marginBottom: 5 }}>
							<Text style={{ color: '#d6d6d6' }}>Bienvenido, </Text>
							<Text style={{ fontWeight: 'bold', color: '#d6d6d6' }}>
								Mauricio Fullana
							</Text>
						</View>
						<Text style={{ fontSize: 11, color: '#c9c9c9' }}>
							Último acceso: 20 May 14:48
						</Text>
						<Text style={{ fontSize: 11, color: '#c9c9c9' }}>
							Último cambio de contraseña: 7 May 14:22
						</Text>
					</View>
				</View>
				<View style={{ flex: 2, flexDirection: 'row', paddingBottom: 10 }}>
					<TouchableOpacity style={styles.section}>
						<View style={styles.iconContainer}>
							<MaterialCommunityIcons
								style={styles.icon}
								name="qrcode"
								color={Colors.white}
								size={30}
							/>
						</View>
						<View>
							<Text style={styles.sectionText}>Cobrar</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={styles.section}>
						<View style={styles.iconContainer}>
							<MaterialIcons
								style={styles.icon}
								name="attach-money"
								color={Colors.white}
								size={30}
							/>
						</View>
						<View>
							<Text style={styles.sectionText}>Pagar</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.section}
						onPress={() => navigation.navigate('Movements')}
					>
						<View style={styles.iconContainer}>
							<MaterialCommunityIcons
								style={styles.icon}
								name="format-list-bulleted"
								color={Colors.white}
								size={30}
							/>
						</View>
						<View>
							<Text style={styles.sectionText}>Historial</Text>
						</View>
					</TouchableOpacity>
				</View>
			</LinearGradient>
			<View
				style={{
					flex: 1,
					backgroundColor: 'white',
					paddingHorizontal: 20,
					borderTopRightRadius: 15,
					borderTopLeftRadius: 15
				}}
			>
				<View style={{ flexDirection: 'row', marginTop: 30, marginVertical: 10 }}>
					<Text style={{flex: 1, color: '#9b9aa1', fontSize: 16}}>
						Transacciones recientes
					</Text>
					<TouchableOpacity>
						<Text style={{alignSelf: 'flex-end', color: Colors.main, fontSize: 14}}>
							Ver todas
						</Text>
					</TouchableOpacity>
				</View>
				<FlatList
					data={movements}
					keyExtractor={movement => movement.id.toString()}
					renderItem={movement => renderMovements(movement.item)}
					ItemSeparatorComponent={renderSeparator}
					showsVerticalScrollIndicator={false}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: Colors.screenBackground
	},
	welcome: {
		flex: 1,
		flexDirection: 'row',
		paddingHorizontal: 15,
		marginTop: 70
	},
	welcomePicContainer: {
		justifyContent: 'center'
	},
	img: {
		width: 95,
		height: 95,
		borderRadius: 50,
		borderColor: Colors.mediumGray,
		borderWidth: 1
	},
	welcomeTextContainer: {
		flex: 1,
		marginLeft: 10,
		justifyContent: 'center'
	},
	section: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	iconContainer: {
		marginBottom: 10
	},
	divider: {
		marginHorizontal: 50,
		borderBottomColor: Colors.white,
		borderBottomWidth: 0.3
	},
	icon: {
		padding: 20,
		backgroundColor: '#29394f',
		borderRadius: 50
	},
	sectionText: {
		color: Colors.white,
		fontSize: 12
	}
});

export default HomeScreen;
