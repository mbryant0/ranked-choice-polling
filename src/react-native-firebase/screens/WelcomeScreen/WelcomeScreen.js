import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import {
  AbrilFatFaceText,
  SpaceMonoText,
  QuickSandText,
} from '../../components/StyledText';

const WelcomeScreen = ({ navigation }) => {
  const onButtonPress = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <AbrilFatFaceText style={styles.title}>
        make your voice{' '}
        <AbrilFatFaceText style={styles.special}>count.</AbrilFatFaceText>
      </AbrilFatFaceText>
      <TouchableOpacity onPress={onButtonPress} style={styles.button}>
        <QuickSandText style={styles.buttonTitle}>
          Start creating polls today >>
        </QuickSandText>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
