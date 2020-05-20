import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import { Colors } from '../../styles';

const HomeScreen: FunctionComponent = () => {
	return (
		<View style={styles.container}>
			<View style={styles.welcome}>
				<Text>Bienvenido</Text>
			</View>
			<TouchableOpacity style={styles.section}>
				<View style={{ flex: 1, alignItems: 'flex-end' }}>
					<MaterialCommunityIcons
						style={styles.icon}
						name="qrcode-scan"
						color={Colors.white}
						size={45}
					/>
				</View>
				<View style={{ flex: 1 }}>
					<Text style={styles.sectionText}>Cobrar</Text>
				</View>
			</TouchableOpacity>
			<View style={styles.divider} />
			<TouchableOpacity style={styles.section}>
				<View style={{ flex: 1, alignItems: 'flex-end' }}>
					<MaterialIcons
						style={styles.icon}
						name="attach-money"
						color={Colors.white}
						size={43}
					/>
				</View>
				<View style={{ flex: 1 }}>
					<Text style={styles.sectionText}>Pagar</Text>
				</View>
			</TouchableOpacity>
			<View style={styles.divider} />
			<TouchableOpacity style={styles.section}>
				<View style={{ flex: 1, alignItems: 'flex-end' }}>
					<MaterialCommunityIcons
						style={styles.icon}
						name="format-list-bulleted"
						color={Colors.white}
						size={40}
					/>
				</View>
				<View style={{ flex: 1 }}>
					<Text style={styles.sectionText}>Movimientos</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: Colors.screenBackground
	},
	welcome: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	section: {
        flex: 1.3,
        paddingRight: 30,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	divider: {
		marginHorizontal: 50,
		borderBottomColor: Colors.white,
		borderBottomWidth: 0.3
	},
	icon: {
		marginRight: 25
	},
	sectionText: {
		color: Colors.white,
		fontSize: 20
	}
});

export default HomeScreen;
