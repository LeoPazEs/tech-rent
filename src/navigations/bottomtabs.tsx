import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PerfilScreen } from "../screens/perfil";
import { MaterialIcons } from "@expo/vector-icons";
import { AutenticadoNavegacaoStack } from "./StackAutenticado";
import { CarrinhoScreen } from "../screens/loja/carrinho";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="loja"
        component={AutenticadoNavegacaoStack}
        options={{
          tabBarLabel: "Início",
          tabBarIcon: () => <MaterialIcons name="home" size={20} />,
        }}
      />
      <Tab.Screen
        name="carrinho-compras"
        component={CarrinhoScreen}
        options={{
          tabBarLabel: "Carrinho",
          tabBarIcon: () => <MaterialIcons name="shopping-cart" size={20} />,
        }}
      />
      <Tab.Screen
        name="perfil"
        component={PerfilScreen}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: () => <MaterialIcons name="account-box" size={20} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
