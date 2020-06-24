import React, { FunctionComponent, useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from '../../components/SearchBar';
import { Colors } from '../../styles';
import { Ionicons } from '@expo/vector-icons';
import { movementsSelector } from '../../state/selectors';
import { movements } from '../../state/movements/actions';

const MovementsScreen: FunctionComponent = () => {
	// const movements = [
	// 	{
    //         id: 1,
    //         holder: 'Mauricio Fullana',
	// 		reference: 'Pago Colegio',
	// 		date: new Date(),
	// 		amount: 550.00,
	// 		isDebit: true
	// 	},
	// 	{
    //         id: 2,
    //         holder: 'Sebastian Fernandéz',
	// 		reference: 'Alquiler casa Montevideo',
	// 		date: new Date(),
	// 		amount: 680.00,
	// 		isDebit: true
	// 	},
	// 	{
    //         id: 3,
    //         holder: 'Horacio Peralta',
	// 		reference: 'Test credito',
	// 		date: new Date(),
	// 		amount: 15500.00,
	// 		isDebit: false
	// 	},
	// 	{
    //         id: 4,
    //         holder: 'Alvaro Recoba',
	// 		reference: 'Pago por clase de tiros libres',
	// 		date: new Date(),
	// 		amount: 15500.00,
	// 		isDebit: true
	// 	},
	// 	{
    //         id: 5,
    //         holder: 'Luis Suarez',
	// 		reference: 'Referencia',
	// 		date: new Date(),
	// 		amount: 50600.00,
	// 		isDebit: false
	// 	},
	// 	{
    //         id: 6,
    //         holder: 'Edi Cavani',
	// 		reference: 'Salario Club Nacional de Football',
	// 		date: new Date(),
	// 		amount: 3000.00,
	// 		isDebit: true
	// 	},
	// 	{
    //         id: 7,
    //         holder: 'Edi Cavani',
	// 		reference: 'Salario Club Nacional de Football',
	// 		date: new Date(),
	// 		amount: 3000.00,
	// 		isDebit: true
	// 	},
	// 	{
    //         id: 8,
    //         holder: 'Edi Cavani',
	// 		reference: 'Salario Club Nacional de Football',
	// 		date: new Date(),
	// 		amount: 3000.00,
	// 		isDebit: true
	// 	}
	// ];

	const dispatch = useDispatch();
    dispatch(movements({ productBankIdentifier: "1|2530589091", dateFrom: new Date("2018-09-01"), dateTo: new Date("2020-09-01") }))
	const [refreshing, setRefreshing] = useState(false);
	const [term, setTerm] = useState('');	
    const results = useSelector(movementsSelector);

    // useEffect(() => {
    //     setResults(movements.filter(item => {
    //         return term === '' || item.reference.toLowerCase().includes(term.toLowerCase()) || item.holder.toLowerCase().includes(term.toLowerCase());
    //     }))
    // }, [term])

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
			<View style={{ borderColor: Colors.mediumGray, borderWidth: 0.3 }} />
		);
	};

	const onRefresh = () => {
		setRefreshing(true);
		setTimeout(() => {
			setRefreshing(false);
			// setResults(results);
		}, 2000);
	};

	
	const keyExtractor = (item: any , index: number): string =>
	item.id.toString();
	
	return (
		<View style={styles.container}>
			<SearchBar term={term} onTermChange={setTerm} />
			<FlatList
				data={results.payload}
				onRefresh={onRefresh}
				refreshing={refreshing}
				keyExtractor={keyExtractor}
				renderItem={movement => renderMovements(movement)}
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
