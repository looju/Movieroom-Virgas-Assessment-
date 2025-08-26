import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Image, ActivityIndicator} from 'react-native';
import PushNotification from 'react-native-push-notification';
import GlobalStyle from '../utils/GlobalStyle';
import Animated, { Easing, FadeInRight, LightSpeedInRight } from 'react-native-reanimated';
import {useFonts, Arizonia_400Regular} from '@expo-google-fonts/dev';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('My Tasks');
    }, 3000);
  }, []);


    return (
      <View style={styles.body}>
        <Animated.View entering={LightSpeedInRight.easing(Easing.ease)} >
        <Image style={styles.logo} source={require('../assets/icon.jpg')} />
        </Animated.View>
      <Animated.Text entering={FadeInRight.easing(Easing.ease)} style={styles.text}>Task</Animated.Text>
      </View>
    )

  }


const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  logo: {
    width: 150,
    height: 150,
    margin: 20,
  },
  text: {
    fontSize: 40,
    color: '#ffffff',
    fontFamily:"Arizonia-Regular"
  },
});