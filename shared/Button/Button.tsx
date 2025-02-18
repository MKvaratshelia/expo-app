import {
	Pressable,
	PressableProps,
	Text,
	StyleSheet,
	Animated,
	GestureResponderEvent,
	ActivityIndicator,
} from 'react-native';
import { Colors, Fonts, Radius } from '../tokens';

interface ButtonProps extends PressableProps {
	text: string;
	isLoading?: boolean;
}

export const Button = (props: ButtonProps) => {
	const animatedValue = new Animated.Value(100);

	const color = animatedValue.interpolate({
		inputRange: [0, 100],
		outputRange: [Colors.primaryHover, Colors.primary],
	});

	const fadeIn = (event: GestureResponderEvent) => {
		Animated.timing(animatedValue, {
			toValue: 0,
			duration: 100,
			useNativeDriver: false,
		}).start();

		props.onPressIn && props.onPressIn(event);
	};
	const fadeOut = (event: GestureResponderEvent) => {
		Animated.timing(animatedValue, {
			toValue: 100,
			duration: 100,
			useNativeDriver: false,
		}).start();
		props.onPressOut && props.onPressOut(event);
	};

	return (
		<Pressable onPressIn={fadeIn} onPressOut={fadeOut} {...props}>
			<Animated.View
				style={{
					...styles.button,
					backgroundColor: color,
				}}
			>
				{!props.isLoading && <Text style={styles.text}>{props.text}</Text>}
				{props.isLoading && <ActivityIndicator size={'large'} color={Colors.white} />}
			</Animated.View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		height: 58,
		borderRadius: Radius.r10,
	},

	text: {
		color: Colors.white,
		fontSize: Fonts.f18,
		fontFamily: 'FiraSans',
	},
});
