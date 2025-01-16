import { Pressable, PressableProps, Text, StyleSheet, View, Animated, GestureResponderEvent } from "react-native";
import { Colors, Fonts, Radius } from "../tokens";
import { useState } from "react";

interface ButtonProps extends PressableProps {
    text: string;
}

export const Button = (props: ButtonProps) => {
    const animatedValue = new Animated.Value(100);
    const color = animatedValue.interpolate({
        inputRange: [0, 100],
        outputRange: [Colors.primaryHover, Colors.primary],
    });

    const fadeIn = (event: GestureResponderEvent) => {
        Animated.timing(animatedValue, {
            toValue: 0,
            duration: 100,
            useNativeDriver: true,
        }).start();
        props.onPressIn && props.onPressIn(event);
    };
    const fadeOut = (event: GestureResponderEvent) => {
        Animated.timing(animatedValue, {
            toValue: 100,
            duration: 100,
            useNativeDriver: true,
        }).start();
        props.onPressOut && props.onPressOut(event);
    };

    return (
        <Pressable
            onPressIn={fadeIn}
            onPressOut={fadeOut}
            {...props}
        >
            <Animated.View
                style={{
                    ...styles.button,
                    backgroundColor: color,
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

        borderRadius: Radius.r10,
    },

    text: {
        color: Colors.white,
        fontSize: Fonts.f18,
    },
});
