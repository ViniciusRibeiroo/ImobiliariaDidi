import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Compra from './components/Compra';
import Aluguel from './components/Aluguel';
import Contato from './components/Contato';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Compra"
          component={Compra}
          options={{
            tabBarLabel:"Compra",
            tabBarOptions: {
              style: {
                backgroundColor: '#1C1C1C',
              }
            },
            tabBarIcon: () => (
              <Image
                style={{width: 30, height: 30}}
                source={require('./assets/Compra.png')} />
            )
          }}
        />
        <Tab.Screen
          name="Aluguel"
          component={Aluguel}
          options={{
            tabBarLabel:"Aluguel",
            tabBarOptions: {
              style: {
                backgroundColor: '#1C1C1C',
              }
            },
            tabBarIcon: () => (
              <Image
                style={{width: 30, height: 30}}
                source={require('./assets/Aluguel.png')} />
            )
          }}
        />
        <Tab.Screen
          name="Contato"
          component={Contato}
          options={{
            tabBarLabel:"Contato",
            tabBarOptions: {
              style: {
                backgroundColor: '#1C1C1C',
              }
            },
            tabBarIcon: () => (
              <Image
                style={{width: 30, height: 30}}
                source={require('./assets/Contato.png')} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}