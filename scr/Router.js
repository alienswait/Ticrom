/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './Pages/WelcomeScreen';
import MainScreen from './Pages/MainScreen';
import AboutUs from './Pages/AboutUs';
import Services from './Pages/Services';
import OurSpecialProducts from './Pages/OurSpecialProducts';
import MeetUs from './Pages/MeetUs';

const stack = createStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Ticrom" component={WelcomeScreen} options={{
          headerShown: false,
        }} />
        <stack.Screen name="Hakkımızda" component={AboutUs} />
        <stack.Screen name="Anasayfa" component={MainScreen} />
        <stack.Screen name="Hizmetlerimiz" component={Services} />
        <stack.Screen name="Özel Ürünlerimiz" component={OurSpecialProducts} />
        <stack.Screen name="Bize Ulaşın" component={MeetUs} />
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App;