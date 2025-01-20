import { View, Image, StyleSheet, Text } from 'react-native';
import { User } from '../../model/user.model';
import { Colors, Fonts, Gaps } from '../../../../shared/tokens';

export const UserMenu = ({ user }: { user: User | null }) => {
	if (!user) {
		return;
	}
	return (
		<View style={styles.container}>
			{user.photo ? (
				<Image
					style={styles.avatar}
					source={{
						uri: user.photo,
					}}
				/>
			) : (
				<Image style={styles.avatar} source={require('../../../../assets/images/avatar.png')} />
			)}
			<Text style={styles.name}>{user.name}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		gap: Gaps.g10,
		marginTop: 30,
	},
	avatar: {
		width: 70,
		height: 70,
		borderRadius: 35,
	},
	name: {
		fontSize: Fonts.f16,
		fontFamily: Fonts.regular,
		color: Colors.white,
	},
});
