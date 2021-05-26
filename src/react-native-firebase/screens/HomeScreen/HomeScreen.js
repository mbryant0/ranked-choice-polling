import React, { useState, useEffect } from 'react';
import {
  Button,
  FlatList,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import { firebase } from '../../firebase/config';

export default function HomeScreen(props) {
  const handlePress = () => {
    firebase.auth().signOut();
  };
  return (
    <View style={styles.container}>
      <Text>It's looking a little empty...</Text>
      <Button title='Log Out' onPress={handlePress} />
    </View>
  );
}
