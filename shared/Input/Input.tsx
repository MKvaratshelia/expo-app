import { TextInput, TextInputProps, StyleSheet, View, Pressable } from 'react-native';
import { Colors, Fonts, Radius } from '../tokens';
import { useState } from 'react';
import EyeOpenedIcon from '../../assets/icons/eye-opened';
import EyeClosedIcon from '../../assets/icons/eye-closed';

interface InputProps extends TextInputProps {
	isPassword?: boolean;
}

export const Input = ({ isPassword, style, ...props }: InputProps) => {
	const [isPassworVisible, setIsPasswordVisible] = useState<boolean>(false);

	const onPressHandler = () => {
		setIsPasswordVisible((prev) => !prev);
	};

	return (
		<View style={style}>
			<TextInput
				secureTextEntry={isPassword && !isPassworVisible}
				style={styles.input}
				placeholderTextColor={Colors.gray}
				{...props}
			/>
			{isPassword && (
				<Pressable style={styles.eyeIcon} onPress={onPressHandler}>
					{isPassworVisible ? <EyeOpenedIcon /> : <EyeClosedIcon />}
				</Pressable>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		height: 58,
		backgroundColor: Colors.violetDark,
		borderRadius: Radius.r10,
		fontSize: Fonts.f16,
		fontFamily: 'FiraSans',
		color: Colors.white,
		paddingHorizontal: 25,
	},

	eyeIcon: {
		position: 'absolute',
		right: 0,
		paddingHorizontal: 20,
		paddingVertical: 18,
	},
});
