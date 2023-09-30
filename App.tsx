import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import { useFonts } from 'expo-font';

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter: require('./assets/fonts/inter-font.ttf')
  }) 
  if (!fontsLoaded) {return null}

  return (
    <>
      <StatusBar
        style='light'
        translucent
      />
      
      <Home />  
    </>

  );
}


