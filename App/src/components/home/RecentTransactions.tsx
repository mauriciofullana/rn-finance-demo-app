import React, { FunctionComponent, useState } from 'react';
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
import {
	baseFontSize,
	smallFontSize,
	containerHeaderText,
} from '../../styles/typography';
import { containerRaduis } from '../../styles/spacing';

interface IRecentTransactionsProps {
	movements: IMovement[];
}

const FILTER_ALL = 'FILTER_ALL';
const FILTER_PAYMENTS = 'FILTER_PAYMENTS';
const FILTER_CHARGES = 'FILTER_CHARGES';

const RecentTransactions: FunctionComponent<IRecentTransactionsProps> = ({
	movements,
}) => {
	const [activeFilter, setActiveFilter] = useState<string>(FILTER_ALL);
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

	const renderHeaderButton = (filter: string, text: string) => {
		const active = activeFilter === filter;
		return (
			<TouchableOpacity
				style={[styles.headerButton, active ? styles.headerButtonActive : null]}
				onPress={() => setActiveFilter(filter)}
			>
				<Text
					style={[
						styles.headerButtonText,
						active ? styles.headerButtonTextActive : null,
					]}
				>
					{text}
				</Text>
			</TouchableOpacity>
		);
	};

	movements = movements.filter((movement) => {
		if (activeFilter === FILTER_PAYMENTS) {
			return movement.isDebit;
		} else if (activeFilter === FILTER_CHARGES) {
			return !movement.isDebit;
		}

		return movement;
	});

	return (
		<View style={styles.container}>
			<View style={styles.headerContainer}>
				<View style={styles.headerTextContainer}>
					<Text style={styles.headerMainText}>Transacciones recientes</Text>
					<TouchableOpacity onPress={() => navigation.navigate('Movements')}>
						<Text style={styles.headerSeeAllText}>Ver todas</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.headerButtonsContainer}>
					{renderHeaderButton(FILTER_ALL, 'TODOS')}
					{renderHeaderButton(FILTER_PAYMENTS, 'PAGOS')}
					{renderHeaderButton(FILTER_CHARGES, 'COBROS')}
				</View>
			</View>
			<View style={{ paddingHorizontal: 20, flex: 1 }}>
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
	container: {
		backgroundColor: Colors.lightWarmGray,
		flex: 1,
		borderTopStartRadius: containerRaduis,
		borderTopEndRadius: containerRaduis,
	},
	headerContainer: {
		height: 90,
		borderBottomColor: Colors.screenBackground,
		borderBottomWidth: 1,
		padding: 20,
	},
	headerTextContainer: {
		flexDirection: 'row',
		marginBottom: 13,
	},
	headerMainText: {
		flex: 1,
		color: Colors.lightGray,
		...containerHeaderText,
	},
	headerSeeAllText: {
		alignSelf: 'flex-end',
		color: Colors.main,
		...containerHeaderText,
	},
	headerButtonsContainer: {
		flexDirection: 'row',
	},
	headerButton: {
		borderColor: Colors.mediumGray,
		borderWidth: 1,
		borderRadius: 5,
		padding: 2,
		marginRight: 10,
		alignItems: 'center',
		width: 70,
	},
	headerButtonActive: {
		borderColor: Colors.main,
	},
	headerButtonText: {
		color: Colors.mediumGray,
	},
	headerButtonTextActive: {
		color: Colors.main,
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
