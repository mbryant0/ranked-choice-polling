import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/images/icon.png')}
      />
      <Text>Where is my splash screen?</Text>
    </View>
  );
}
