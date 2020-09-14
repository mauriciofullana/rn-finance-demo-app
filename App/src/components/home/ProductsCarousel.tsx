import React, { useRef, useState, FunctionComponent } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Colors } from '../../styles';
import ProductsCarouselItem from './ProductsCarouselItem';
import { IProduct } from '../../state/products/types';

interface IProductsCarouselProps {
	products: IProduct[];
	selectedProductChange: Function;
}

const ProductsCarousel: FunctionComponent<IProductsCarouselProps> = ({
	products,
	selectedProductChange,
}) => {
	const { width, height } = Dimensions.get('window');
	const carouselRef = useRef(null);
	const [activeSlide, setActiveSlide] = useState(0);
	const [fedeInRight, setFedeInRight] = useState(false);

	const renderItem = ({ item, index }: any) => {
		const active = index === activeSlide;
		return (
			<ProductsCarouselItem
				item={item}
				active={active}
				fedeInRight={fedeInRight}
			/>
		);
	};

	const renderPagination = () => {
		return (
			<Pagination
				dotsLength={products.length}
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
				data={products}
				renderItem={renderItem}
				sliderWidth={width}
				itemWidth={width}
				onSnapToItem={(index) => {
					setFedeInRight(() => {
						return index > activeSlide;
					});
					selectedProductChange(products[index]._id);
					setActiveSlide(index);
				}}
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
