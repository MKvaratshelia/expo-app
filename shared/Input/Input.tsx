import { TextInput, TextInputProps, StyleSheet, View, Pressable } from "react-native";
import { Colors, Fonts, Radius } from "../tokens";
import { useState } from "react";
import EyeOpenedIcon from "../../assets/icons/eye-opened";
import EyeClosedIcon from "../../assets/icons/eye-closed";

interface InputProps extends TextInputProps {
    isPassword?: boolean;
}

export const Input = (props: InputProps) => {
    const [isPassworVisible, setIsPasswordVisible] = useState<boolean>(false);

    const onPressHandler = () => {
        setIsPasswordVisible((prev) => !prev);
    };

    return (
        <View>
            <TextInput
                secureTextEntry={props.isPassword && !isPassworVisible}
                style={styles.input}
                placeholderTextColor={Colors.gray}
                {...props}
            />
            {props.isPassword && (
                <Pressable
                    style={styles.eyeIcon}
                    onPress={onPressHandler}
                >
                    {isPassworVisible ? <EyeOpenedIcon /> : <EyeClosedIcon />}
                </Pressable>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    // inputContainer: {
    //     flexDirection: "row",
    //     alignItems: "center",
    //     paddingHorizontal: 25,
    //     backgroundColor: Colors.violetDark,
    //     height: 58,
    //     borderRadius: Radius.r10,
    //     justifyContent: "space-between",
    // },
    input: {
        height: 58,
        backgroundColor: Colors.violetDark,
        borderRadius: Radius.r10,
        fontSize: Fonts.f16,
        color: Colors.white,
        paddingHorizontal: 25,
    },

    eyeIcon: {
        position: "absolute",
        right: 0,
        paddingHorizontal: 20,
        paddingVertical: 18,
    },
});
