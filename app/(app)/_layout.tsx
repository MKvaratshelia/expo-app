import { SplashScreen, Redirect } from 'expo-router';

import { useAtomValue } from 'jotai';
import { authAtom } from '../../entities/auth/model/auth.state';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Colors, Fonts } from '../../shared/tokens';

import { MenuButton } from '../../features/layout/ui/MenuButton/MenuButton';
import { CustomDrawer } from '../../widget/layout/ui/CustomDrawer/CustomDrawer';
import { StyleSheet } from 'react-native';
SplashScreen.preventAutoHideAsync();

export default function AppLoyout() {
	const { access_token } = useAtomValue(authAtom);
	if (!access_token) {
		return <Redirect href={'/login'} />;
	}

	return (
		// eslint-disable-next-line react-native/no-inline-styles
		<GestureHandlerRootView style={styles.wrapper}>
			<Drawer
				drawerContent={(props) => <CustomDrawer {...props} />}
				screenOptions={({ navigation }) => ({
					headerStyle: {
						backgroundColor: Colors.blackLight,
						shadowOpacity: 0,
						shadowColor: Colors.blackLight,
					},
					headerLeft: () => {
						return <MenuButton navigation={navigation} />;
					},
					headerTitleStyle: {
						color: Colors.white,
						fontFamily: Fonts.regular,
						fontSize: Fonts.f20,
					},
					headerTitleAlign: 'center',
					sceneStyle: {
						backgroundColor: Colors.black,
					},
				})}
			>
				<Drawer.Screen
					name="index"
					options={{
						title: 'Мои курсы',
					}}
				/>
				<Drawer.Screen
					name="profile"
					options={{
						title: 'Профиль',
					}}
				/>
			</Drawer>
		</GestureHandlerRootView>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
	},
});
