import { StyleSheet, View, Image, Dimensions, KeyboardAvoidingView, Platform } from 'react-native';
import { Input } from '../shared/Input/Input';
import { Colors, Gaps } from '../shared/tokens';
import { Button } from '../shared/Button/Button';
import { ErrorNotification } from '../shared/ErrorNotification/ErrorNotification';
import { useEffect, useState } from 'react';
import { CustomLink } from '../shared/Link/CustomLink';
import { useAtom } from 'jotai';
import { loginAtom } from '../entities/auth/model/auth.state';
import { router } from 'expo-router';
import { useScreenOrientation } from '../shared/hooks';
import { Orientation } from 'expo-screen-orientation';

export default function App() {
	const [errorLocal, setErrorLocal] = useState<string | undefined>();
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [{ access_token, isLoading, error }, login] = useAtom(loginAtom);

	const orientation = useScreenOrientation();

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

	return (
		<View style={styles.container}>
			<ErrorNotification error={errorLocal} />
			{/* Компонент не дает перекрывать клавиатурой поля ввода */}
			<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.content}>
				<Image resizeMode={'contain'} style={styles.logo} source={require('../assets/logo.png')} />

				<View style={styles.form}>
					<View
						style={{
							...styles.inputs,
							flexDirection: orientation === Orientation.PORTRAIT_UP ? 'column' : 'row',
						}}
					>
						<Input
							style={{
								width: orientation === Orientation.PORTRAIT_UP ? 'auto' : Dimensions.get('window').width / 2 - 16 - 48,
							}}
							placeholder="email"
							onChangeText={setEmail}
						/>

						<Input
							style={{
								width: orientation === Orientation.PORTRAIT_UP ? 'auto' : Dimensions.get('window').width / 2 - 16 - 48,
							}}
							isPassword
							placeholder="password"
							onChangeText={setPassword}
						/>
					</View>

					<Button isLoading={isLoading} text="Войти" onPress={submit} />
				</View>
				<CustomLink text="Восстановить пароль" href={'/restore'} />
				{/* <Link href={'/restores'}>
					<Text style={styles.link}>Восстановить пароль</Text>
				</Link> */}
			</KeyboardAvoidingView>
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
	inputs: {
		gap: Gaps.g16,
	},
	// link: {
	// 	fontSize: Fonts.f18,
	// 	color: Colors.links,
	// },
});
