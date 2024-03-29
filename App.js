import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/AuthContexte';
import Login from './src/Login/Login';
import Accueil from './src/Accueil/Accueil';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Accueil" component={Accueil} />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}
