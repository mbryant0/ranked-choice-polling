import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  LoginScreen,
  HomeScreen,
  SignupScreen,
  SplashScreen,
  WelcomeScreen,
} from './screens';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { decode, encode } from 'base-64';
if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}
import { firebase } from './firebase/config';
import 'react-native-gesture-handler';
import { useFonts } from '@expo-google-fonts/inter';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const Stack = createStackNavigator();
  let [fontsLoaded] = useFonts({
    AbrilFatface: require('./assets/fonts/AbrilFatface-Regular.ttf'),
    Quicksand: require('./assets/fonts/Quicksand-VariableFont_wght.ttf'),
    SpaceMono: require('./assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    const usersRef = firebase.firestore().collection('users');
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data();
            setLoading(false);
            setUser(userData);
          })
          .catch((error) => {
            setLoading(false);
          });
      } else {
        setLoading(false);
        setUser(null);
      }
    });
  }, []);

  if (loading) {
    return (
      <>
        <SplashScreen />
      </>
    );
  }
  //
  //
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <Stack.Screen name='Home'>
            {(props) => <HomeScreen {...props} extraData={user} />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name='Welcome' component={WelcomeScreen} />
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Signup' component={SignupScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
