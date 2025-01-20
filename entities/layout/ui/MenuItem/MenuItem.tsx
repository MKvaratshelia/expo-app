import { DrawerContentComponentProps } from '@react-navigation/drawer/lib/typescript/commonjs/src/types';
import { ReactNode, useState } from 'react';
import { Pressable, PressableProps, Text, StyleSheet, View } from 'react-native';
import { Colors, Fonts, Gaps } from '../../../../shared/tokens';

export interface MenuItemProps {
	icon: ReactNode;
	path: string;
	drawer: DrawerContentComponentProps;
	text: string;
}
export const MenuItem = (props: MenuItemProps & PressableProps) => {
	const { icon, text, drawer, path } = props;
	const [clicked, setClicked] = useState<boolean>(false);
	const isActive = drawer.state.routes[drawer.state.index].name === path;

	return (
		<Pressable
			onPress={() => {
				drawer.navigation.navigate(path);
			}}
			onPressIn={() => setClicked(true)}
			onPressOut={() => setClicked(false)}
			{...props}
		>
			<View
				style={{
					...styles.menu,
					borderColor: isActive ? Colors.primary : Colors.black,
					backgroundColor: clicked || isActive ? Colors.violetDark : Colors.black,
				}}
			>
				{icon}
				<Text style={styles.text}>{text}</Text>
			</View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	menu: {
		flexDirection: 'row',
		gap: Gaps.g20,
		paddingHorizontal: 24,
		paddingVertical: 16,
		alignItems: 'center',
		borderRightWidth: 5,
	},
	text: {
		color: Colors.white,
		fontSize: Fonts.f18,
		fontFamily: Fonts.regular,
	},
});
