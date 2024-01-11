import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity,Alert } from 'react-native';

import Button from "../components/Button/AboutUsButton/AboutUsButton";
import Button2 from "../components/Button/ServicesButton/Services";
import Button3 from "../components/Button/SpecialProductsButton/SpecialProductsButton";
import Button4 from "../components/Button/MeetUsButton/MeetUsButton";

const App = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');

  function handleSearch() {

    if (searchText.trim() === '') {
      Alert.alert('Uyarı', 'Lütfen bir şeyler yazarak arama yapın.');
    } else {
      // Örneğin: Arama sonuçlarını işleme veya başka bir ekrana yönlendirme gibi işlemler
      console.log('Aranan kelime:', searchText);
    }
    // Burada arama işlemlerini gerçekleştirebilirsiniz.
    console.log('Aranan kelime:', searchText);
  }

  function goToAboutUs() {
    navigation.navigate("Hakkımızda");
  }

  function goToServices() {
    navigation.navigate("Hizmetlerimiz");
  }

  function goToOurSpecialProducts() {
    navigation.navigate("Özel Ürünlerimiz");
  }
  function goToMeetUs() {
    navigation.navigate("Bize Ulaşın");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.centeredText}>Ticrom ailesinin ayrıcalıklı dünyasına hoşgeldiniz</Text>

      {/* Arama Çubuğu */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Type Here..."
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text>Ara</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <Button text="Hakkımızda" onPress={goToAboutUs} />
        <Button2 text="Hizmetlerimiz" onPress={goToServices} />
        <Button3 text="Özel Ürünlerimiz" onPress={goToOurSpecialProducts} />
        <Button4 text="Bize Ulaşın" onPress={goToMeetUs}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: '100%', // Değiştirildi
    alignItems: 'center',
    marginTop: -150,
    backgroundColor: "#BDD6E6"
  },
  centeredText: {
    textAlign: "auto",
    fontSize: 15,
    fontWeight: "bold",
    margin: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  // Arama Çubuğu Stilleri
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    margin: 50,
    
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 5,
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    backgroundColor:"#58bcf0"
  },
});

export default App;
