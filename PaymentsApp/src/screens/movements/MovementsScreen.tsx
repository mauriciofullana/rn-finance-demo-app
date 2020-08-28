import React, { FunctionComponent, useState, useEffect } from 'react';
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	TouchableOpacity,
} from 'react-native';
import SearchBar from '../../components/SearchBar';
import { Colors } from '../../styles';
import { FontAwesome } from '@expo/vector-icons';

const MovementsScreen: FunctionComponent = () => {
	const movements = [
		{
			id: 1,
			holder: 'Mauricio Fullana',
			reference: 'Pago Colegio',
			date: new Date(),
			amount: 550.0,
			isDebit: true,
		},
		{
			id: 2,
			holder: 'Sebastian Fernandéz',
			reference: 'Alquiler casa Montevideo',
			date: new Date(),
			amount: 680.0,
			isDebit: true,
		},
		{
			id: 3,
			holder: 'Horacio Peralta',
			reference: 'Test credito',
			date: new Date(),
			amount: 15500.0,
			isDebit: false,
		},
		{
			id: 4,
			holder: 'Alvaro Recoba',
			reference: 'Pago por clase de tiros libres',
			date: new Date(),
			amount: 15500.0,
			isDebit: true,
		},
		{
			id: 5,
			holder: 'Luis Suarez',
			reference: 'Referencia',
			date: new Date(),
			amount: 50600.0,
			isDebit: false,
		},
		{
			id: 6,
			holder: 'Edi Cavani',
			reference: 'Salario Club Nacional de Football',
			date: new Date(),
			amount: 3000.0,
			isDebit: true,
		},
		{
			id: 7,
			holder: 'Edi Cavani',
			reference: 'Salario Club Nacional de Football',
			date: new Date(),
			amount: 3000.0,
			isDebit: true,
		},
		{
			id: 8,
			holder: 'Edi Cavani',
			reference: 'Salario Club Nacional de Football',
			date: new Date(),
			amount: 3000.0,
			isDebit: true,
		},
	];

	const [refreshing, setRefreshing] = useState(false);
	const [term, setTerm] = useState('');
	const [results, setResults] = useState(movements);

	useEffect(() => {
		setResults(
			movements.filter((item) => {
				return (
					term === '' ||
					item.reference.toLowerCase().includes(term.toLowerCase()) ||
					item.holder.toLowerCase().includes(term.toLowerCase())
				);
			})
		);
	}, [term]);

	const renderMovements = (movement: any) => {
		return (
			<View style={styles.listItemContainer}>
				<View style={styles.listItemInfoTextContainer}>
					<Text style={styles.listItemHolderText}>{movement.holder}</Text>
					<Text style={styles.listItemReferenceText}>{movement.reference}</Text>
				</View>
				<View style={styles.listItemAmountContainer}>
					<Text style={styles.listItemAmount}>USD {movement.amount}</Text>
				</View>
				<FontAwesome
					style={styles.listItemIcon}
					name={movement.isDebit ? 'caret-down' : 'caret-up'}
					color={movement.isDebit ? Colors.red : Colors.green}
					size={18}
				/>
			</View>
		);
	};

	const renderSeparator = () => {
		return <View style={styles.listItemSeparetor} />;
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
			<View style={styles.headerButtons}>
				<TouchableOpacity
					style={{
						borderColor: Colors.main,
						borderWidth: 1,
						borderRadius: 5,
						padding: 3,
						marginRight: 10,
					}}
				>
					<Text style={{ color: Colors.main }}>COBROS</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						borderColor: Colors.mediumGray,
						borderWidth: 1,
						borderRadius: 5,
						padding: 3,
						marginRight: 10,
					}}
				>
					<Text style={{ color: Colors.mediumGray }}>PAGOS</Text>
				</TouchableOpacity>
			</View>
			<FlatList
				data={results}
				onRefresh={onRefresh}
				refreshing={refreshing}
				keyExtractor={(movement) => movement.id.toString()}
				renderItem={(movement) => renderMovements(movement.item)}
				ItemSeparatorComponent={renderSeparator}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.screenBackground,
		paddingHorizontal: 15,
	},
	headerText: {
		flexDirection: 'row',
		marginBottom: 12,
	},
	headerButtons: {
		flexDirection: 'row',
	},
	headerMainText: {
		flex: 1,
		fontSize: 14,
		color: Colors.lightGray,
	},
	headerSeeAllText: {
		alignSelf: 'flex-end',
		color: Colors.main,
		fontSize: 14,
	},
	listItemSeparetor: {
		borderColor: Colors.lightGray,
		borderWidth: 0.5,
		opacity: 0.3,
	},
	listItemContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		height: 80,
	},
	listIconContainer: {
		marginRight: 15,
		marginLeft: 10,
	},
	listItemInfoTextContainer: {
		flex: 1,
		alignItems: 'flex-start',
	},
	listItemHolderText: {
		color: Colors.lightGray,
		fontWeight: 'bold',
	},
	listItemReferenceText: {
		color: Colors.lightGray,
		fontSize: 12,
	},
	listItemAmountContainer: {
		flex: 1,
		alignItems: 'flex-end',
		marginRight: 10,
	},
	listItemAmount: {
		fontSize: 16,
		fontWeight: 'bold',
		color: Colors.lightGray,
	},
	listItemIcon: {
		marginLeft: 10,
	},
});

export default MovementsScreen;
