import React, { FunctionComponent, useState } from 'react';
import {
	View,
	FlatList,
	Text,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';
import { Colors } from '../../styles';
import { Ionicons } from '@expo/vector-icons';
import SearchBar from '../../components/SearchBar';
import { ChargeListScreenNavigationProp } from '../../navigation/main/types';

interface ChargeListProps {
	navigation: ChargeListScreenNavigationProp;
}

const ChargeListScreen: FunctionComponent<ChargeListProps> = ({
	navigation,
}) => {
	const [term, setTerm] = useState('');

	const qrList = [
		{
			id: 1,
			description: 'Cobro test',
			createdDate: new Date(),
			exopirationDate: new Date(),
			amount: 550.0,
		},
		{
			id: 2,
			description: 'Cobro test 2',
			createdDate: new Date(),
			exopirationDate: new Date(),
			amount: 550.0,
		},
		{
			id: 3,
			description: 'Cobro test 3',
			createdDate: new Date(),
			exopirationDate: new Date(),
			amount: 550.0,
		},
	];

	const renderSeparator = () => {
		return <View style={styles.listItemSeparetor} />;
	};

	const renderQrList = (qr: any) => {
		return (
			<TouchableOpacity
				style={styles.qrListContainer}
				onPress={() => navigation.navigate('Charge')}
			>
				<View style={styles.itemInfoContainer}>
					<Text style={styles.itemDescription}>{qr.description}</Text>
					<Text style={styles.itemCurrencyDate}>USD {qr.amount}</Text>
					<Text style={styles.itemCurrencyDate}>
						{qr.exopirationDate.toLocaleDateString('en-US')}
					</Text>
				</View>
				<View style={styles.itemIconContainer}>
					<Ionicons
						name="ios-arrow-forward"
						size={20}
						color={Colors.mediumGray}
					/>
				</View>
			</TouchableOpacity>
		);
	};

	return (
		<View style={styles.container}>
			<SearchBar term={term} onTermChange={setTerm} />
			<FlatList
				data={qrList}
				keyExtractor={(qr) => qr.id.toString()}
				renderItem={(qr) => renderQrList(qr.item)}
				ItemSeparatorComponent={renderSeparator}
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
	qrListContainer: {
		flex: 1,
		height: 80,
		flexDirection: 'row',
		alignItems: 'center',
	},
	itemInfoContainer: {
		flex: 1,
		alignItems: 'flex-start',
	},
	itemDescription: {
		color: Colors.lightGray,
		fontWeight: 'bold',
	},
	itemCurrencyDate: {
		color: Colors.lightGray,
		fontSize: 12,
	},
	itemIconContainer: {
		marginRight: 15,
		marginLeft: 10,
	},
	listItemSeparetor: {
		borderColor: Colors.lightGray,
		borderWidth: 0.5,
		opacity: 0.3,
	},
});

export default ChargeListScreen;
