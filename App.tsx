import { StyleSheet, Text, View, Image } from "react-native";
import { Input } from "./shared/Input/Input";
import { Colors, Gaps } from "./shared/tokens";
import EyeClosed from "./assets/icons/eye-closed";
import EyeOpened from "./assets/icons/eye-opened";
import { Button } from "./shared/Button/Button";

export default function App() {
    return (
        <View style={styles.container}>
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

                    <Button text='Войти' />
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
