import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { View, StyleSheet, Image } from 'react-native';
import { Colors } from '../../../../shared/tokens';
import { CustomLink } from '../../../../shared/Link/CustomLink';
import { CloseDrawer } from '../../../../features/layout/ui/CloseDrawe/CloseDrawer';
import { useAtom, useSetAtom } from 'jotai';
import { logoutAtom } from '../../../../entities/auth/model/auth.state';
import { loadProfileAtom } from '../../../../entities/user/model/user.state';
import { useEffect } from 'react';
import { UserMenu } from '../../../user/ui/UserMenu/UserMenu';
import ProfileIcon from '../../../../assets/menu/profileIcon';
import CoursesIcon from '../../../../assets/menu/coursesIcon';
import { MenuItem } from '../../../../entities/layout/ui/MenuItem/MenuItem';

const MENU = [
	{ text: 'Профиль', icon: <ProfileIcon />, path: 'profile' },
	{ text: 'Курсы', icon: <CoursesIcon />, path: 'index' },
];

export const CustomDrawer = (props: DrawerContentComponentProps) => {
	const logout = useSetAtom(logoutAtom);
	const [profile, loadProfile] = useAtom(loadProfileAtom);

	useEffect(() => {
		loadProfile();
	}, []);

	return (
		<DrawerContentScrollView {...props} contentContainerStyle={styles.scrollView}>
			<View style={styles.content}>
				<CloseDrawer {...props.navigation} />
				<UserMenu user={profile.profile} />
				{MENU.map((menu) => {
					return <MenuItem key={menu.path} {...menu} drawer={props} />;
				})}
			</View>
			<View style={styles.footer}>
				<CustomLink text="Выход" onPress={() => logout()} href={'/login'} />
				<Image style={styles.logo} resizeMode={'contain'} source={require('../../../../assets/logo.png')} />
			</View>
		</DrawerContentScrollView>
	);
};

const styles = StyleSheet.create({
	scrollView: {
		flex: 1,
		backgroundColor: Colors.black,
	},

	content: {
		flex: 1,
	},
	footer: {
		alignItems: 'center',
		gap: 50,
		marginBottom: 40,
	},
	logo: {
		height: 29,
		width: 163,
	},
});
