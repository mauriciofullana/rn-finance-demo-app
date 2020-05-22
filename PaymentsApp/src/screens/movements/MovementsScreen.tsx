import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import SearchBar from '../../components/SearchBar';
import { Colors } from '../../styles';
import { Ionicons } from '@expo/vector-icons';

const MovementsScreen: FunctionComponent = () => {
	const movements = [
		{
            id: 1,
            holder: 'Mauricio Fullana',
			reference: 'Pago Colegio',
			date: new Date(),
			amount: 550.00,
			isDebit: true
		},
		{
            id: 2,
            holder: 'Sebastian Fernandéz',
			reference: 'Pago Colegio',
			date: new Date(),
			amount: 680.00,
			isDebit: true
		},
		{
            id: 3,
            holder: 'Horacio Peralta',
			reference: 'Pago Colegio',
			date: new Date(),
			amount: 15500.00,
			isDebit: false
		},
		{
            id: 4,
            holder: 'Alvaro Recoba',
			reference: 'Pago Colegio',
			date: new Date(),
			amount: 15500.00,
			isDebit: true
		},
		{
            id: 5,
            holder: 'Luis Suarez',
			reference: 'Pago Colegio',
			date: new Date(),
			amount: 50600.00,
			isDebit: false
		},
		{
            id: 6,
            holder: 'Edi Cavani',
			reference: 'Pago Colegio',
			date: new Date(),
			amount: 3000.00,
			isDebit: true
		}
	];

	const renderMovements = (movement: any) => {
		return (
			<View style={{ flex: 1, height: 60, flexDirection: 'row', alignItems: 'center' }}>
				<View style={{marginRight: 10, marginLeft: 5}}>
					<Ionicons
						name={movement.isDebit ? 'ios-arrow-forward' : 'ios-arrow-back'}
						size={20}
						color={movement.isDebit ? '#bd0000' : 'green'}
					/>
				</View>
                <View>
				    <Text style={{fontWeight: 'bold'}}>{movement.holder}</Text>
                    <Text>{movement.reference}</Text>
                </View>
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <Text style={{fontSize: 20 ,color: movement.isDebit ? '#bd0000' : 'gray'}}>Bs {movement.isDebit ? '-' : ''}{movement.amount}</Text>
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
			<SearchBar term="" onTermChange={() => {}} />
			<FlatList
				// style={{ marginTop: 15 }}
				data={movements}
				keyExtractor={movement => movement.id.toString()}
				renderItem={movement => renderMovements(movement.item)}
				ItemSeparatorComponent={renderSeparator}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		//alignItems: 'center',
		backgroundColor: Colors.white,
		paddingHorizontal: 15
	}
});

export default MovementsScreen;
