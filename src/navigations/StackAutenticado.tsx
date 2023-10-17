import { createStackNavigator } from  "@react-navigation/stack";
import { ProdutoDetalheScreen} from "../screens/loja/detalhe";
import { Lojascreen } from "../screens/loja";


export type AutenticadoNavegacaoStackParams = {
    loja: undefined,
    detalhe: undefined,
}
const Stack = createStackNavigator<AutenticadoNavegacaoStackParams>();

export const AutenticadoNavegacaoStack = () => (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="loja1" component={Lojascreen} />
            <Stack.Screen name="detalhe" component={ProdutoDetalheScreen}/>
        </Stack.Navigator>
)