import { Pressable, View, StyleSheet } from 'react-native';
import CloseIcon from '../../../../assets/icons/close-icon';
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/commonjs/src/types';

export const CloseDrawer = (navigation: DrawerNavigationHelpers) => {
	return (
		<Pressable onPress={() => navigation.closeDrawer()}>
			<View style={{ ...styles.button }}>
				<CloseIcon />
			</View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		top: 20,
		right: 20,
	},
});
