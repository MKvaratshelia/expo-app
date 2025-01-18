import { Link } from 'expo-router';
import { Text, StyleSheet } from 'react-native';
import { CustomlinkProps } from './CustomLinkProps';
import { Colors, Fonts } from '../tokens';

export const CustomLink = ({ text, ...props }: CustomlinkProps) => {
	return (
		<Link style={styles.link} {...props}>
			<Text>{text}</Text>
		</Link>
	);
};

const styles = StyleSheet.create({
	link: {
		color: Colors.links,
		fontFamily: Fonts.regular,
		fontSize: Fonts.f18,
	},
});
