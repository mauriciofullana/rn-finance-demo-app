import React, { useRef, useState } from 'react';
import {
	View,
	Text,
	Dimensions,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Colors } from '../../styles';
import ProductsCarouselItem from './ProductsCarouselItem';

const dummyData = [
	{
		type: 'CUENTA CORRIENTE',
		amount: 550.2,
		currency: 'USD',
		accountNumber: 'xxxx-091',
	},
	{
		type: 'CUENTA CORRIENTE',
		amount: 1236.0,
		currency: 'USD',
		accountNumber: 'xxxx-091',
	},
	{
		type: 'CAJA DE AHORROS',
		amount: 550.2,
		currency: 'UYU',
		accountNumber: 'xxxx-091',
	},
	{
		type: 'TARJETA DE CREDITO',
		amount: 2000.0,
		currency: 'USD',
		accountNumber: 'xxxx-091',
	},
];

const ProductsCarousel = () => {
	const { width, height } = Dimensions.get('window');
	const carouselRef = useRef(null);
	const [activeSlide, setActiveSlide] = useState(0);

	const renderItem = ({ item }: any) => {
		return <ProductsCarouselItem item={item} />;
	};

	const renderPagination = () => {
		return (
			<Pagination
				dotsLength={dummyData.length}
				activeDotIndex={activeSlide}
				containerStyle={{ paddingTop: 20, paddingBottom: 0 }}
				dotStyle={{
					width: 8,
					height: 8,
					borderRadius: 5,
					marginHorizontal: 2,
					backgroundColor: Colors.main,
				}}
				inactiveDotStyle={
					{
						// Define styles for inactive dots here
					}
				}
				inactiveDotOpacity={0.3}
				inactiveDotScale={0.7}
			/>
		);
	};

	return (
		<View>
			<Carousel
				ref={carouselRef}
				data={dummyData}
				renderItem={renderItem}
				sliderWidth={width}
				itemWidth={width}
				onSnapToItem={(index) => setActiveSlide(index)}
			/>
			<View style={styles.carouselBottomBorder} />
			{renderPagination()}
		</View>
	);
};

const styles = StyleSheet.create({
	carouselBottomBorder: {
		borderColor: Colors.mainOpacity,
		borderWidth: 0.5,
	},
});

export default ProductsCarousel;
