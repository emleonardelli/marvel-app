import { NavigationContainer } from '@react-navigation/native';
import { NativeStackNavigation, DefaultTheme } from './src/navigation/NativeStackNavigation';
import { ImageBackground, StyleSheet } from 'react-native';
const image = require('./assets/background-app.png');
export default function App() {
  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={styles.image}
    >
      <NavigationContainer theme={navTheme}>
        <NativeStackNavigation />
      </NavigationContainer>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

const navTheme = {
  ...DefaultTheme,
  colors: {
    backgroundColor: 'black',
  },
};