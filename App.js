import HomeStyles from './HomeCSS';
import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';

export default function App() {
  return (
    <View style={HomeStyles.container}>
      <Text>Changes!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
