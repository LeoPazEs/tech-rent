import { createStackNavigator } from  "@react-navigation/stack";
import { ProdutoDetalheScreen} from "../screens/loja/detalhe";
import { Lojascreen } from "../screens/loja";
import { CarrinhoScreen } from "../screens/loja/carrinho";


export type AutenticadoNavegacaoStackParams = {
    loja1: undefined,
    detalhe: undefined,
    carrinho: undefined
}
const Stack = createStackNavigator<AutenticadoNavegacaoStackParams>();

export const AutenticadoNavegacaoStack = () => (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="loja1" component={Lojascreen} />
            <Stack.Screen name="detalhe" component={ProdutoDetalheScreen}/>
            <Stack.Screen name="carrinho" component={CarrinhoScreen}/>
        </Stack.Navigator>
)