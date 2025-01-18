import { Text, StyleSheet, Dimensions, Animated } from 'react-native';
import { Colors, Fonts } from '../tokens';
import { ErrorNatificationProps } from './ErrorNotification.props';
import { useEffect, useState } from 'react';

export const ErrorNotification = ({ error }: ErrorNatificationProps) => {
	const [isShown, setIsShown] = useState<boolean>(false);
	const animatedValue = new Animated.Value(-100);

	const onEnter = () => {
		Animated.timing(animatedValue, {
			toValue: 0,
			duration: 300,
			useNativeDriver: true,
		}).start();
	};

	useEffect(() => {
		if (!error) {
			return;
		}
		setIsShown(true);

		const timer = setTimeout(() => {
			setIsShown(false);
		}, 3000);

		return () => {
			clearTimeout(timer);
		};
	}, [error]);

	if (!isShown) {
		return <></>;
	}

	return (
		<Animated.View
			style={{
				...styles.error,
				transform: [
					{
						translateY: animatedValue,
					},
				],
			}}
			onLayout={onEnter}
		>
			<Text style={styles.errorText}>{error}</Text>
		</Animated.View>
	);
};

const styles = StyleSheet.create({
	error: {
		width: Dimensions.get('screen').width,

		position: 'absolute',
		top: 0,
		left: 0,
		padding: 15,
		backgroundColor: Colors.red,
		height: 50,
	},
	errorText: {
		color: Colors.white,
		fontSize: Fonts.f16,
		textAlign: 'center',
		fontFamily: 'FiraSans',
	},
});
