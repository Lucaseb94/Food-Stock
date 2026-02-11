import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { LoginPage } from './screens/login';
import { Text } from 'react-native';
import { HomePage } from './screens/Home';

const Stack = createNativeStackNavigator();

export const  AppRoutes = ()=> {
    return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Página de login" component={LoginPage} />
            <Stack.Screen name="home" component={HomePage} />
        </Stack.Navigator>
    </NavigationContainer>
    );
}