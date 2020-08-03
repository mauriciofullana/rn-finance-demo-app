import React, { FunctionComponent } from 'react';
import {
	View,
	Text,
	FlatList,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

import { Colors } from '../../styles';
import { HomeScreenNavigationProp } from '../../navigation/main/types';
import { IMovement } from '../../state/movements/types';
import { baseFontSize, smallFontSize } from '../../styles/typography';

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

	return (
		<View
			style={{
				backgroundColor: Colors.lightWarmGray,
				flex: 1,
				borderTopStartRadius: 20,
				borderTopEndRadius: 20,
			}}
		>
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
							padding: 2,
							marginRight: 10,
							alignItems: 'center',
							width: 70,
						}}
					>
						<Text style={{ color: Colors.main }}>TODOS</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							borderColor: Colors.mediumGray,
							borderWidth: 1,
							borderRadius: 5,
							padding: 2,
							marginRight: 10,
							alignItems: 'center',
							width: 70,
						}}
					>
						<Text style={{ color: Colors.mediumGray }}>PAGOS</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							borderColor: Colors.mediumGray,
							borderWidth: 1,
							borderRadius: 5,
							padding: 2,
							marginRight: 10,
							alignItems: 'center',
							width: 70,
						}}
					>
						<Text style={{ color: Colors.mediumGray }}>COBROS</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View style={{ paddingHorizontal: 20 }}>
				<FlatList
					data={movements}
					keyExtractor={(movement) => movement._id}
					renderItem={(movement) => renderMovements(movement.item)}
					ItemSeparatorComponent={renderSeparator}
					showsVerticalScrollIndicator={false}
				/>
			</View>
		</View>
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
		borderWidth: 0.5,
		opacity: 0.3,
	},
	listItemContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		height: 70,
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
		fontSize: smallFontSize,
	},
	listItemReferenceText: {
		color: Colors.lightGray,
		fontSize: 12,
	},
	listItemAmountContainer: {
		flex: 1,
		alignItems: 'flex-end',
	},
	listItemAmount: {
		fontSize: baseFontSize,
		fontWeight: 'bold',
		color: Colors.lightGray,
	},
	listItemIcon: {
		marginLeft: 10,
	},
});

export default RecentTransactions;
