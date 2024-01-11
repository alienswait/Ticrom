import React from "react";
import { Text, StyleSheet, SafeAreaView, ImageBackground } from "react-native";

function MeetUs() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../Assets/ticrom_adres.png")}
        style={styles.imageBackground}
      >
        <Text style={styles.text}>
          Çevrimiçi satışlarımız, haklarımız veya ortaklık hizmetimizle ilgili tüm sorularınızı burada yanıtlayacağız.
        </Text>
      </ImageBackground>
      <Text>Adres: ESENTEPE MAH. CEVİZLİ D-100 GÜNEY YANYOL CAD. LAPISHAN NO: 25 İÇ KAPI NO: 9 KARTAL/ İSTANBUL</Text>
      <Text>Telefon: 0216 488 81 00</Text>
      <Text>E-Posta: info@ticrom.com</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#BDD6E6",
  },
  imageBackground: {
    width: 400,
    height: 200,
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 50,
  },
  text: {
    fontSize: 15,
    lineHeight: 30,
    fontStyle: "italic",
    fontFamily: "Arial",
    letterSpacing: 1,
    textAlign: "auto",
    marginTop:-150
    
  },
});

export default MeetUs;
