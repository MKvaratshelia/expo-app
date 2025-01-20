import { Pressable, PressableProps, View, StyleSheet } from 'react-native';
import MenuIcon from '../../../../assets/icons/menu';
import { useState } from 'react';
import { Colors } from '../../../../shared/tokens';

interface ButtonProps extends PressableProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	navigation: any;
}

export const MenuButton = ({ navigation, ...props }: ButtonProps) => {
	const [clicked, setClicked] = useState<boolean>(false);

	return (
		<Pressable
			onPress={() => navigation.toggleDrawer()}
			onPressIn={() => setClicked(true)}
			onPressOut={() => setClicked(false)}
			{...props}
		>
			<View style={{ ...styles.button, backgroundColor: clicked ? Colors.violetDark : Colors.blackLight }}>
				<MenuIcon />
			</View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
		paddingHorizontal: 20,
	},
});
