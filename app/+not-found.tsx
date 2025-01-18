import { Text, Image, StyleSheet, SafeAreaView, View } from 'react-native';
import { Colors, Fonts, Gaps } from '../shared/tokens';
import { CustomLink } from '../shared/Link/CustomLink';

export default function NotFound() {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.content}>
				<Image style={styles.image} resizeMode={'contain'} source={require('../assets/images/not-found.png')} />
				<Text style={styles.text}>Ооо... что-то пошло не так. Попробуйте вернуться на главный экран приложения</Text>
				<CustomLink text="На главный экран" href={'/'} />
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 55,
	},
	content: {
		alignItems: 'center',
		gap: Gaps.g50,
	},
	image: {
		width: 204,
		height: 282,
	},
	text: {
		fontSize: Fonts.f18,
		color: Colors.white,
		textAlign: 'center',
		fontFamily: Fonts.regular,
	},
});
