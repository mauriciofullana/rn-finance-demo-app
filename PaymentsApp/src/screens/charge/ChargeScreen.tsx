import React, { FunctionComponent, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Colors, Buttons } from '../../styles';

const ChargeScreen: FunctionComponent = () => {

    return (
        <View style={styles.container}>
			<View style={styles.qrContainer}>
				<Image style={styles.img} source={require('../../../assets/qr.png')} />
				<Text style={styles.qrDate}>Vence el 10/11/2020</Text>
			</View>
			<View style={styles.optionsContainer}>
				<TouchableOpacity style={[styles.commonButton, styles.editButton]}>
					<Text style={[styles.buttonText, styles.editButtonText]}>EDITAR</Text>
					<View style={styles.iconContainer}>
						<Ionicons style={styles.buttonIcon} name="md-create" size={28} color={Colors.green} />
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={[styles.commonButton, styles.shareButton]}>
					<Text style={[styles.buttonText, styles.shareButtonText]}>COMPARTIR</Text>
					<View style={styles.iconContainer}>
						<Ionicons style={styles.buttonIcon} name="md-share" size={28} color="white" />
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={[styles.commonButton, styles.deleteButton]}>
					<Text style={styles.buttonText}>BORRAR</Text>
					<View style={styles.iconContainer}>
						<Ionicons style={styles.buttonIcon} name="md-trash" size={28} color="white" />
					</View>
				</TouchableOpacity>
			</View>
		</View>
    );
}

const styles = StyleSheet.create({
    container: {
		flex: 1,
		backgroundColor: Colors.white,
	},
	qrContainer:{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	img: {
		height: '70%',
		width: undefined,
		aspectRatio: 712 / 711,
		marginBottom: 15
	},
	qrDate: {
		fontSize: 18,
	},
	optionsContainer: {
		flex: 1,
		paddingHorizontal: 35
		//alignItems: 'center'
	},
	commonButton: {
		...Buttons.actionButton,
		marginBottom: 20,
		flexDirection: 'row',
		paddingHorizontal: 15
	},
	buttonText: {
		flex: 1,
		fontWeight: 'bold',
		color: Colors.white
	},
	editButton: {
		backgroundColor: 'transparent',
		borderColor: Colors.green,
		borderWidth: 1
	},
	editButtonText: {
		color: Colors.green
	},
	shareButton: {
		backgroundColor: Colors.green
	},
	shareButtonText: {
		color: Colors.white
	},
	iconContainer: {
		flex: 1,
		alignItems: 'flex-end'
	},
	buttonIcon: {
		
	}
});

export default ChargeScreen;
