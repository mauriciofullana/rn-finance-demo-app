import React, { FunctionComponent, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../../styles';
import { Ionicons } from '@expo/vector-icons';
import SearchBar from '../../components/SearchBar';
import { ChargeListScreenNavigationProp } from '../../navigation/main/types';

interface ChargeListProps {
	navigation: ChargeListScreenNavigationProp;
}

const ChargeListScreen: FunctionComponent<ChargeListProps> = ({navigation}) => {
	const [term, setTerm] = useState('');
    
    const qrList = [
		{
            id: 1,
            description: 'Cobro test',
            createdDate: new Date(),
            exopirationDate: new Date(),
			amount: 550.00
		},
		{
            id: 2,
            description: 'Cobro test 2',
			createdDate: new Date(),
            exopirationDate: new Date(),
			amount: 550.00
		},
		{
            id: 3,
            description: 'Cobro test 3',
			createdDate: new Date(),
            exopirationDate: new Date(),
			amount: 550.00
		}
    ];
    
	const renderSeparator = () => {
		return (
			<View style={{ borderColor: Colors.lightGray, borderWidth: 0.35 }} />
		);
    };
    
    const renderQrList = (qr: any) => {
		return (
			<TouchableOpacity 
				style={styles.qrListContainer}
				onPress={()=>navigation.navigate("Charge")}
			>
				<View style={{flex: 1, alignItems: 'flex-start'}}>
				    <Text style={{fontWeight: 'bold', fontSize: 16, marginBottom: 2}}>{qr.description}</Text>
                    <Text style={{fontSize: 15}}>USD {qr.amount}</Text>
                    <Text style={{fontSize: 15}}>{qr.exopirationDate.toLocaleDateString("en-US")}</Text>
                </View>
				<View style={{marginRight: 15, marginLeft: 10}}>
					<Ionicons
						name="ios-arrow-forward"
						size={25}
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
				keyExtractor={qr => qr.id.toString()}
				renderItem={qr => renderQrList(qr.item)}
				ItemSeparatorComponent={renderSeparator}
			/>
		</View>
    );
}

const styles = StyleSheet.create({
    container: {
		flex: 1,
		backgroundColor: Colors.white,
		paddingHorizontal: 15
	},
	qrListContainer: {
		flex: 1, 
		height: 80, 
		flexDirection: 'row', 
		alignItems: 'center'
	}
});

export default ChargeListScreen;
