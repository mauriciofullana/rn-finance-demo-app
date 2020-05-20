import React, { FunctionComponent } from 'react';
import { StyleSheet, TouchableOpacity, Image, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../../screens/home/HomeScreen';
import { MainStackParamList } from './types';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const MainStack = createStackNavigator<MainStackParamList>();

const MainStackkNavigator: FunctionComponent = () => {
	return (
		<MainStack.Navigator
			initialRouteName="Home"
			screenOptions={{
				headerTransparent: false,
				headerTitle: () => null,
                headerTitleStyle: {flex: 1, textAlign: 'center'},
				headerLeft: () => {
					return (
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity style={styles.headerIconContainer}>
                                <Ionicons style={styles.hederMenuIcon} name="md-menu" size={28} />
                            </TouchableOpacity>
                            <Image
                                style={styles.img}
                                source={require('../../../assets/logoHeader.png')}
                            />
                        </View>
					);
                },
                headerRight: () => {
                    return (
						<TouchableOpacity style={styles.headerIconContainer}>
							<Ionicons style={styles.hederMenuIcon} name="ios-log-out" size={28} />
						</TouchableOpacity>
					);
                }
			}}
		>
			<MainStack.Screen name="Home" component={HomeScreen} />
		</MainStack.Navigator>
	);
};

const styles = StyleSheet.create({
	hederMenuIcon: {
		color: Colors.black
	},
	headerIconContainer: {
		marginHorizontal: 15
    },
    headerTitle: {
        alignItems: 'center'
    },
    img: {
		width: 110,
		height: 32,
	},
});

export default MainStackkNavigator;
