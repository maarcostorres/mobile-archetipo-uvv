import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 

const Stack = createStackNavigator();

import index from './PAGES';
import Login from './PAGES/Login';
import Esqueci from './PAGES/Esqueci';
import Registro from './PAGES/Registro';
import Reset from './PAGES/Reset';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" >
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Esqueci" component={Esqueci} options={{ headerShown: false }}/>
        <Stack.Screen name="Registro" component={Registro} options={{ headerShown: false }}/>
        <Stack.Screen name="index" component={index} options={{ headerShown: false }}/>
        <Stack.Screen name="Reset" component={Reset} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
