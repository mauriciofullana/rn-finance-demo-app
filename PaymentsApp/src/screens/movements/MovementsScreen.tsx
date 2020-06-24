import React, { FunctionComponent, useState, useEffect } from 'react';
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
			reference: 'Alquiler casa Montevideo',
			date: new Date(),
			amount: 680.00,
			isDebit: true
		},
		{
            id: 3,
            holder: 'Horacio Peralta',
			reference: 'Test credito',
			date: new Date(),
			amount: 15500.00,
			isDebit: false
		},
		{
            id: 4,
            holder: 'Alvaro Recoba',
			reference: 'Pago por clase de tiros libres',
			date: new Date(),
			amount: 15500.00,
			isDebit: true
		},
		{
            id: 5,
            holder: 'Luis Suarez',
			reference: 'Referencia',
			date: new Date(),
			amount: 50600.00,
			isDebit: false
		},
		{
            id: 6,
            holder: 'Edi Cavani',
			reference: 'Salario Club Nacional de Football',
			date: new Date(),
			amount: 3000.00,
			isDebit: true
		},
		{
            id: 7,
            holder: 'Edi Cavani',
			reference: 'Salario Club Nacional de Football',
			date: new Date(),
			amount: 3000.00,
			isDebit: true
		},
		{
            id: 8,
            holder: 'Edi Cavani',
			reference: 'Salario Club Nacional de Football',
			date: new Date(),
			amount: 3000.00,
			isDebit: true
		}
	];

	const [refreshing, setRefreshing] = useState(false);
	const [term, setTerm] = useState('');
    const [results, setResults] = useState(movements);

    useEffect(() => {
        setResults(movements.filter(item => {
            return term === '' || item.reference.toLowerCase().includes(term.toLowerCase()) || item.holder.toLowerCase().includes(term.toLowerCase());
        }))
    }, [term])

	const renderMovements = (movement: any) => {
		return (
			<View style={{ flex: 1, height: 80, flexDirection: 'row', alignItems: 'center' }}>
				<View style={{marginRight: 15, marginLeft: 10}}>
					<Ionicons
						name={movement.isDebit ? 'ios-arrow-forward' : 'ios-arrow-back'}
						size={20}
						color={movement.isDebit ? '#bd0000' : 'green'}
					/>
				</View>
				<View style={{flex: 1, alignItems: 'flex-start'}}>
				    <Text style={{fontWeight: 'bold'}}>{movement.holder}</Text>
                    <Text>{movement.reference}</Text>
                </View>
                <View style={{flex: 1, alignItems: 'flex-end', marginRight: 10}}>
                    <Text style={{fontSize: 20 ,color: movement.isDebit ? '#bd0000' : 'gray'}}>Bs {movement.isDebit ? '-' : ''}{movement.amount}</Text>
                </View>
			</View>
		);
	};

	const renderSeparator = () => {
		return (
			<View style={{ borderColor: Colors.lightGray, borderWidth: 0.35 }} />
		);
	};

	const onRefresh = () => {
		setRefreshing(true);
		setTimeout(() => {
			setRefreshing(false);
			setResults(movements);
		}, 2000);
	};

	return (
		<View style={styles.container}>
			<SearchBar term={term} onTermChange={setTerm} />
			<FlatList
				data={results}
				onRefresh={onRefresh}
				refreshing={refreshing}
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
		backgroundColor: Colors.white,
		paddingHorizontal: 15
	}
});

export default MovementsScreen;
