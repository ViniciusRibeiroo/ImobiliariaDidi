import { Image, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Compra from './components/Compra';
import Aluguel from './components/Aluguel';
import Contato from './components/Contato';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: { backgroundColor: '#1C1C1C' },
            tabBarActiveTintColor: 'gold',
            tabBarInactiveTintColor: 'white',
            headerShown : false
          }}
        >
          <Tab.Screen
            name="Compra"
            component={Compra}
            options={{
              tabBarLabel: "Compra",
              tabBarIcon: () => (
                <Image
                  style={{ width: 30, height: 30 }}
                  source={require('./assets/Compra.png')} />
              )
            }}
          />
          <Tab.Screen
            name="Aluguel"
            component={Aluguel}
            options={{
              tabBarLabel: "Aluguel",
              tabBarIcon: () => (
                <Image
                  style={{ width: 20, height: 30 }}
                  source={require('./assets/Aluguel.png')} />
              )
            }}
          />
          <Tab.Screen
            name="Contato"
            component={Contato}
            options={{
              tabBarLabel: "Contato",
              tabBarIcon: () => (
                <Image
                  style={{ width: 30, height: 30 }}
                  source={require('./assets/Contato.png')} />
              )
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}