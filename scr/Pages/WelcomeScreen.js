import React from "react";
import { Text, StyleSheet, SafeAreaView, ImageBackground } from "react-native";
import Button from "../components/Button";


const image = {uri: 'https://cdn.ticrom.com/wp-content/uploads/2021/08/logo@w200px.png'}

function Welcome({navigation}){


    function goToMainScreen(){
        navigation.navigate("Anasayfa");
    }

    return(
        <SafeAreaView style = {styles.container}>
            <ImageBackground source={image} style={{width: 200, height: 100}} />

            <Text style = {styles.header}> Ticrom Technology </Text>
            <Button text="Hoşgeldiniz!!" onPress={goToMainScreen} />
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center",
    },

    image:{
        width: 200, // Ayarla istediğin genişlik ve yükseklik değerlerini
        height: 200, // görüntü oranını koruyarak
        resizeMode: "contain", // "contain" olarak ayarla
        marginBottom: 10,
    },

    header:{
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        margin: 10,
    }
})

export default Welcome;