import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Lojascreen } from "../screens/loja";
import { MaterialIcons } from "@expo/vector-icons";

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
        component={Lojascreen}
        options={{
          tabBarLabel: "Loja",
          tabBarIcon: () => <MaterialIcons name="store" size={20} />,
        }}
      />
      <Tab.Screen
        name="carrinho-compras"
        component={Lojascreen}
        options={{
          tabBarLabel: "Carrinho",
          tabBarIcon: () => <MaterialIcons name="shopping-cart" size={20} />,
        }}
      />
      <Tab.Screen
        name="perfil"
        component={Lojascreen}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: () => <MaterialIcons name="account-box" size={20} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
