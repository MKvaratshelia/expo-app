import { StyleSheet, Text, View, Image, Alert, Platform, ToastAndroid, Animated } from "react-native";
import { Input } from "./shared/Input/Input";
import { Colors, Gaps } from "./shared/tokens";
import { Button } from "./shared/Button/Button";
import { ErrorNotification } from "./shared/ErrorNotification/ErrorNotification";
import { useState } from "react";

export default function App() {
    const [error, setError] = useState<string | undefined>();

    const alert = () => {
        // Alert.alert
        setError("Неверный логин или пароль");
        setTimeout(() => {
            setError(undefined);
        }, 4000);
    };
    return (
        <View style={styles.container}>
            <ErrorNotification error={error} />
            <View style={styles.content}>
                <Image
                    resizeMode={"contain"}
                    style={styles.logo}
                    source={require("./assets/logo.png")}
                />

                <View style={styles.form}>
                    <Input placeholder='email' />

                    <Input
                        isPassword
                        placeholder='password'
                    />

                    <Button
                        text='Войти'
                        onPress={alert}
                    />
                </View>
                <Text>Восстановить пароль</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.black,
        justifyContent: "center",
        flex: 1,
        padding: 55,
    },

    content: {
        alignItems: "center",
        gap: Gaps.g50,
    },
    logo: {
        width: 220,
    },

    form: {
        gap: Gaps.g16,
        alignSelf: "stretch",
    },

    text: {
        color: "red",
        fontSize: 50,
    },
});
