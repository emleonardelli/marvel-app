import { NavigationContainer } from '@react-navigation/native';
import { NativeStackNavigation } from './src/navigation/NativeStackNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <NativeStackNavigation />
    </NavigationContainer>
  );
}