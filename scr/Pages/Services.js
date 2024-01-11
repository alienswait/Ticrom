import React from "react";
import { Text, StyleSheet, SafeAreaView } from "react-native";

function Services() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        - Ticrom Ürünleri
        - Expertiz & Bakım Hizmetlerimiz
        - İmplant Sistemleri
        - Danışmanlık Hizmetlerimiz
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"#BDD6E6"
  },
  text: {
    fontSize: 14,
    lineHeight: 24,
    fontStyle: "italic",
    fontFamily: "Arial",
    letterSpacing: 1,
    textAlign: "center",
  },
});

export default Services;
