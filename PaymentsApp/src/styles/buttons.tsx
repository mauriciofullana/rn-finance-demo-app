import * as Colors from './colors';
import * as Typography from './typography';
import * as Spacing from './spacing';

export const base = {
	alignItems: 'center',
	marginRight: Spacing.smallest,
	marginVertical: Spacing.tiny
};

export const text = {
	color: Colors.white,
	fontSize: Typography.smallestFontSize,
	fontWeight: 'bold',
	letterSpacing: 1
};

export const textUnselected = {
	...text,
	color: Colors.mediumGray
};

export const small = {
	paddingHorizontal: Spacing.small,
	paddingVertical: Spacing.small + 2,
	width: 75
};

export const large = {
	paddingHorizontal: Spacing.large,
	paddingVertical: Spacing.large + 4
};

export const rounded = {
	borderRadius: 50
};

export const enabled = {
	backgroundColor: Colors.enabled
};

export const disabled = {
	backgroundColor: Colors.mainDisabled
};

export const smallRounded = {
	...base,
	...small,
	...rounded
};
