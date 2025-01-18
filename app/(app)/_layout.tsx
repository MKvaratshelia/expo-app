import { Stack, SplashScreen } from 'expo-router';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function AppLoyout() {
	// const insets = useSafeAreaInsets();

	const [loaded, error] = useFonts({
		FiraSans: require('../../assets/fonts/FiraSans-Regular.ttf'),
		FiraSansSemibold: require('../../assets/fonts/FiraSans-SemiBold.ttf'),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	useEffect(() => {
		if (error) {
			throw error;
		}
	}, [error]);

	if (!loaded) {
		return null;
	}

	return (
		<SafeAreaProvider>
			<Stack>
				<Stack.Screen name="index" />
			</Stack>
		</SafeAreaProvider>
	);
}
