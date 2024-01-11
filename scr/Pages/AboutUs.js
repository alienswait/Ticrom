import { Text, StyleSheet, SafeAreaView, ImageBackground } from "react-native";

const image = {uri: 'https://cdn.ticrom.com/wp-content/uploads/2022/08/Ticrom-implant-dental-digital-dentistry.jpg.webp'}

function AboutUs() {
  return (
    <SafeAreaView style={styles.container}>

      <ImageBackground source={image} style={{width: 400, height: 200,}} />
      <Text style={styles.text}>
        Ticrom olarak müşteri değil, dost edinmek için çalışıyoruz. Dijital diş hekimliğine yön verecek ölçüde deneyime sahip olmamız, sizlerin isteklerinize rahatlıkla cevap verebileceğimiz anlamına gelmektedir. 27 yıllık tecrübe ve bilgi birikimimizi Ticrom ailesi olarak sizlerle paylaşıyoruz.

        - Türkiye’nin ilk gerçek 5 eksen simultane CADCAM makinesi Mach5 Premium (2010 Şubat)
        - Avrupa’nın ilk Preform™ sisteminin geliştirilmesi (2012 Ekim)
        - Türkiye’nin ilk implant üzeri protetik parça üretimi (2012 Ekim)
        - Dünya’da ilk ve tek olan CADCAM makinelerinde işlenen implant üzeri protezlerinin vida kanallarının tam doğrulukta çıkmasını sağlayan özel matkap tasarımları (Ocak 2013)
        - Türkiye’nin ilk All-on-4® protezinin üretim altyapısının kurulması (2015 Eylül)
        - Bilimplant CAD kütüphanelerinin oluşturulması (2019 Haziran)
        - Sekiz farklı CADCAM makine tasarımı/imalatı (2006-2019)
        - Ve yüzleri gülümseyen yüzlerce insan…
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"#BDD6E6"
  },

  image:{
    width: 200, // Ayarla istediğin genişlik ve yükseklik değerlerini
    height: 200, // görüntü oranını koruyarak
    resizeMode: "contain", // "contain" olarak ayarla
    marginBottom: 10,
},
  text: {
    fontSize: 10,
    lineHeight: 25,
    fontStyle: "italic",
    fontFamily: "arial",
    letterSpacing: 1,
    textAlign:"center"
  },
});

export default AboutUs;