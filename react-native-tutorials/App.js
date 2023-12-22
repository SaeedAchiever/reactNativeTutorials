import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import HelloWorld from './Components/HelloWorld';
import TextAndView from './Components/Text-View-Compo';

export default function App() {
  return (
    <View style={styles.container}>
        <HelloWorld />
        <TextAndView  />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
