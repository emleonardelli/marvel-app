import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DescriptionScreen from '../screens/DescriptionScreen';
import ViewMoreScreen from '../screens/ViewMoreScreen';

const Stack = createStackNavigator();

export function NativeStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="List"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Description"
        component={DescriptionScreen}
        options={{
          title: 'Descripcion'
        }}
      />
      <Stack.Screen
        name="VerMas"
        component={ViewMoreScreen}
        options={{
          title: 'Ver mas'
        }}
      />
    </Stack.Navigator>
  );
}