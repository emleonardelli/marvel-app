import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchScreen from '../screens/SearchScreen';

const Tab = createBottomTabNavigator();

export function NativeStackNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          paddingTop: 5,
          height: 60,
          backgroundColor: '#FF69B4',
        },
        tabBarLabelStyle: {
          fontSize: 15,
          marginBottom: 5,
        },
      })}
    >
    <Tab.Screen
      name="Hace tu busqueda"
      component={SearchScreen}
      options={{
        tabBarLabel: 'Buscar',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="magnify" color={color} size={size}/>
        ),
      }}
    />
      <Tab.Screen
        name="Marvel App"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
}