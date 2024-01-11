import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

import styles from "./SpecialProductsButton.style";

const Button = ({ text, onPress }) => {
    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>

        </TouchableOpacity>
    )
}

export default Button;