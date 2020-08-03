import React, { FunctionComponent, useEffect, useState, useRef } from 'react';
import { View, StyleSheet, Image, Dimensions, Animated } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { movements as movementsAction } from '../../state/movements/actions';
import { Colors } from '../../styles';
import { HomeScreenNavigationProp } from '../../navigation/main/types';
import RecentTransactions from '../../components/home/RecentTransactions';
import Welcome from '../../components/home/Welcome';
import { movementsSelector } from '../../state/selectors';

import SlideUpPanel from 'rn-sliding-up-panel';

interface HomeScreenProps {
	navigation: HomeScreenNavigationProp;
}

const HomeScreen: FunctionComponent<HomeScreenProps> = () => {
	const { width, height } = Dimensions.get('window');

	const dispatch = useDispatch();
	const { movements } = useSelector(movementsSelector);

	useEffect(() => {
		dispatch(movementsAction());
	}, []);

	// SLIDING PANEL

	const [dragRange, setDragRange] = useState({
		top: height - 200,
		bottom: 160,
	});

	const _draggedValue = new Animated.Value(180);

	const ModalRef = useRef(null);

	return (
		<View style={styles.container}>
			<View style={styles.logoContainer}>
				<Image
					style={styles.imgLogo}
					source={require('../../../assets/logo.png')}
				/>
			</View>
			<Welcome />
			<View style={styles.recentTrasnsactionsContainer}>
				<SlideUpPanel
					ref={ModalRef}
					showBackdrop={false}
					draggableRange={dragRange}
					animatedValue={_draggedValue}
					backdropOpacity={0}
					snappingPoints={[360]}
					height={height + 20}
					friction={0.9}
				>
					<View
						style={{
							backgroundColor: Colors.lightWarmGray,
							flex: 1,
							borderTopStartRadius: 20,
							borderTopEndRadius: 20,
						}}
					>
						<View style={styles.panelHandler} />
						<RecentTransactions movements={movements.slice(0, 5)} />
					</View>
				</SlideUpPanel>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.screenBackground,
	},
	logoContainer: {
		alignItems: 'center',
		paddingHorizontal: 25,
	},
	imgLogo: {
		width: '50%',
		height: undefined,
		aspectRatio: 598 / 176,
	},
	panelHandler: {
		height: 5,
		width: 50,
		backgroundColor: Colors.screenBackground,
		borderRadius: 6,
		marginTop: 10,
		alignSelf: 'center',
	},
	recentTrasnsactionsContainer: {
		flex: 1,
	},
});

export default HomeScreen;
