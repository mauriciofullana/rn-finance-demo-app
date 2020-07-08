import React, { FunctionComponent } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	FlatList
} from 'react-native';
import {
	MaterialCommunityIcons,
	MaterialIcons,
} from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import { Colors } from '../../styles';
import { HomeScreenNavigationProp } from '../../navigation/main/types';
import  DataUserComponent  from '../../components/DataUserComponent';

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
			<View style={{ borderColor: Colors.lightGray, borderWidth: 0.35 }} />
		);
	};

	return (
		<View style={styles.container}>
			<LinearGradient
				colors={['rgba(38, 61, 94, 0.9)', 'rgba(255,255,255,0.1)']}
				style={{ flex: 1 }}
			>
				<DataUserComponent/>
				<View style={{ flex: 1, flexDirection: 'row', paddingBottom: 10 }}>
					<TouchableOpacity style={styles.section} onPress={() => navigation.navigate("ChargeList")}>
						<View style={styles.iconContainer}>
							<MaterialCommunityIcons
								style={styles.icon}
								name="qrcode"
								color={Colors.white}
								size={34}
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
								size={34}
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
								size={34}
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
					<TouchableOpacity onPress={() => navigation.navigate('Movements')}>
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
	section: {
		flex: 1,
		alignItems: 'center',
	},
	iconContainer: {
		marginBottom: 10,
		backgroundColor: '#29394f',
		borderRadius: 50
	},
	divider: {
		marginHorizontal: 50,
		borderBottomColor: Colors.white,
		borderBottomWidth: 0.3
	},
	icon: {
		padding: 20,
		backgroundColor: 'transparent'
	},
	sectionText: {
		color: Colors.white,
		fontSize: 12
	}
});

export default HomeScreen;
