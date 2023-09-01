import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from  "@react-navigation/stack";
import { Loginscreen } from "../screens/login";
import { Registrarscreen } from "../screens/registrar";



export type NavegacaoPrincipalParams = {
    login: undefined,
    registrar: undefined
}
const Stack = createStackNavigator<NavegacaoPrincipalParams>();

export const NavegacaoPrincipal = () => (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="login" component={Loginscreen}/>
            <Stack.Screen name="registrar" component={Registrarscreen}/>
        </Stack.Navigator>
    </NavigationContainer>
)