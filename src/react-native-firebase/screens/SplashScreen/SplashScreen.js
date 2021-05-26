import React from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' />
    </View>
  );
}
