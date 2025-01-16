import { Pressable, PressableProps, Text, StyleSheet, View, Animated } from "react-native";
import { Colors, Fonts, Radius } from "../tokens";
import { useState } from "react";

interface ButtonProps extends PressableProps {
    text: string;
}

export const Button = (props: ButtonProps) => {
    const animatedValue = new Animated.ValueXY({
        x: 0,
        y: 0,
    });
    Animated.timing(animatedValue, {
        toValue: {
            x: 100,
            y: 100,
        },
        duration: 2000,
        useNativeDriver: true,
    }).start();
    return (
        <Pressable {...props}>
            <Animated.View
                style={{
                    ...styles.button,
                    transform: [{ translateX: animatedValue.x }, { translateY: animatedValue.y }],
                }}
            >
                <Text style={styles.text}>{props.text}</Text>
            </Animated.View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        height: 58,
        backgroundColor: Colors.primary,

        borderRadius: Radius.r10,
    },

    text: {
        color: Colors.white,
        fontSize: Fonts.f18,
    },
});
