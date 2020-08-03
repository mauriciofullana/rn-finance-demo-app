import React, { FunctionComponent } from 'react';
import {
	View,
	Text,
	FlatList,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Colors } from '../../styles';
import { HomeScreenNavigationProp } from '../../navigation/main/types';
import { IMovement } from '../../state/movements/types';

interface IRecentTransactionsProps {
	movements: IMovement[];
}

const RecentTransactions: FunctionComponent<IRecentTransactionsProps> = ({
	movements,
}) => {
	const navigation = useNavigation<HomeScreenNavigationProp>();

	const renderMovements = (movement: IMovement) => {
		return (
			<View style={styles.listItemContainer}>
				<View style={styles.listItemInfoTextContainer}>
					<Text style={styles.listItemHolderText}>{movement.holder}</Text>
					<Text style={styles.listItemReferenceText}>{movement.reference}</Text>
				</View>
				<View style={styles.listItemAmountContainer}>
					<Text style={styles.listItemAmount}>
						USD {movement.isDebit ? '-' : ''}
						{movement.amount}
					</Text>
				</View>
			</View>
		);
	};

	const renderSeparator = () => {
		return <View style={styles.listItemSeparetor} />;
	};

	return (
		<>
			<View style={styles.headerContainer}>
				<View style={styles.headerText}>
					<Text style={styles.headerMainText}>Transacciones recientes</Text>
					<TouchableOpacity onPress={() => navigation.navigate('Movements')}>
						<Text style={styles.headerSeeAllText}>Ver todas</Text>
					</TouchableOpacity>
				</View>
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
			</View>
			<View style={{ paddingHorizontal: 20 }}>
				<FlatList
					data={movements}
					scrollEnabled={false}
					keyExtractor={(movement) => movement._id}
					renderItem={(movement) => renderMovements(movement.item)}
					ItemSeparatorComponent={renderSeparator}
					showsVerticalScrollIndicator={false}
				/>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	headerContainer: {
		height: 90,
		borderBottomColor: Colors.screenBackground,
		borderBottomWidth: 1,
		padding: 20,
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
		borderWidth: 0.35,
	},
	listItemContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		height: 60,
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
});

export default RecentTransactions;
