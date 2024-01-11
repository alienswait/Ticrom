import React from "react";
import { Text, SafeAreaView, StyleSheet, FlatList, Image, View } from "react-native";

const itemData = [
  {
    img: 'https://cdn.ticrom.com/wp-content/uploads/2020/12/Hokey-ticrom-3.jpg.webp',
    title: ' Hokey Implant Drivers ',
  },
  {
    img: 'https://cdn.ticrom.com/wp-content/uploads/2020/12/Disc-12mm.png.webp',
    title: 'Discs ',
  },
  {
    img: 'https://cdn.ticrom.com/wp-content/uploads/2021/10/scanbox-clinic-8-scaled.jpg.webp',
    title: 'Scanbox ',
  },
  {
    img: 'https://cdn.ticrom.com/wp-content/uploads/2020/12/duz-matkap.jpg.webp',
    title: 'Drills ',
  }
];

function BelowImageList() {
  return (
    <FlatList
      data={itemData}
      keyExtractor={(item) => item.img}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Image
            source={{ uri: `${item.img}?w=248&fit=crop&auto=format` }}
            style={styles.image}
            resizeMode="cover"
          />
          <Text>{item.title}</Text>
        </View>
      )}
    />
  );
}

function SpecialProducts() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}></Text>
      <BelowImageList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#BDD6E6',
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 10,
  },
  image: {
    width: 150,
    height: 150,
    marginRight: 10,
  },
});

export default SpecialProducts;
