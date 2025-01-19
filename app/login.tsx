import { StyleSheet, View, Image } from 'react-native';
import { Input } from '../shared/Input/Input';
import { Colors, Gaps } from '../shared/tokens';
import { Button } from '../shared/Button/Button';
import { ErrorNotification } from '../shared/ErrorNotification/ErrorNotification';
import { useEffect, useState } from 'react';
import { CustomLink } from '../shared/Link/CustomLink';
import { useAtom } from 'jotai';
import { loginAtom } from '../entities/auth/model/auth.state';
import { router } from 'expo-router';

export default function App() {
	const [errorLocal, setErrorLocal] = useState<string | undefined>();
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [{ access_token, isLoading, error }, login] = useAtom(loginAtom);

	const submit = () => {
		if (!email) {
			setErrorLocal('Вы не ввели email');
			return;
		}
		if (!password) {
			setErrorLocal('Вы не ввели пароль');
			return;
		}
		login({ email, password });
	};

	useEffect(() => {
		if (error) {
			setErrorLocal(error);
		}
	}, [error]);

	useEffect(() => {
		if (access_token) {
			router.replace('/');
		}
	}, [access_token]);

	// const alert = () => {
	// 	// Alert.alert
	// 	setError('Неверный логин или пароль');

	// 	setTimeout(() => {
	// 		setError(undefined);
	// 	}, 4000);
	// };

	return (
		<View style={styles.container}>
			<ErrorNotification error={errorLocal} />
			<View style={styles.content}>
				<Image resizeMode={'contain'} style={styles.logo} source={require('../assets/logo.png')} />

				<View style={styles.form}>
					<Input placeholder="email" onChangeText={setEmail} />

					<Input isPassword placeholder="password" onChangeText={setPassword} />

					<Button isLoading={isLoading} text="Войти" onPress={submit} />
				</View>
				<CustomLink text="Восстановить пароль" href={'/restore'} />
				{/* <Link href={'/restores'}>
					<Text style={styles.link}>Восстановить пароль</Text>
				</Link> */}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.black,
		justifyContent: 'center',
		flex: 1,
		padding: 55,
	},

	content: {
		alignItems: 'center',
		gap: Gaps.g50,
	},
	logo: {
		width: 220,
	},

	form: {
		gap: Gaps.g16,
		alignSelf: 'stretch',
	},
	// link: {
	// 	fontSize: Fonts.f18,
	// 	color: Colors.links,
	// },
});
