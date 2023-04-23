import { NavigationContainer } from '@react-navigation/native';
import { DefaultTheme } from './src/navigation/NativeStackNavigation';
import { ImageBackground, StyleSheet } from 'react-native';
import { NativeTabNavigation } from './src/navigation/NativeTabNavigation';
const image = require('./assets/background-app.png');
export default function App() {
  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={styles.image}
    >
      <NavigationContainer theme={navTheme}>
        <NativeTabNavigation />
      </NavigationContainer>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
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