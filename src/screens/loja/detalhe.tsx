import { ImageBackground, ScrollView } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { Card } from '@rneui/themed';
import { buttonStyles } from '../styles/buttonStyle';
import { generalStyles } from '../styles/telaStyle';
import { cardStyles } from '../styles/cardStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { toastConfig } from '../styles/toastStyle';
import { getFirestore, doc, arrayUnion, updateDoc } from '@firebase/firestore';
import { getAuth } from '@firebase/auth';
import Toast from 'react-native-root-toast';
import background from './../../../assets/imgs/background.jpg'

export interface DetalheScreenProps {}

export function ProdutoDetalheScreen(props: DetalheScreenProps) {
  const navigation = useNavigation<any>();
  const route = useRoute();
  const {product} = route.params;
  
  const HandleAddProduct = async (values: any) => {
      const auth = getAuth();
      const db = getFirestore();
      try {
          const carrinho = doc(db, "carrinhos", auth.currentUser.uid);
          updateDoc(carrinho, { produtos: arrayUnion(product.id) });
          Toast.show('Item adicionado no carrinho.',toastConfig)
      } catch (error) {
          Toast.show("Um erro ocorreu, tente novamente.",toastConfig)
      }
  }


  return (
    <ImageBackground source={background} style={generalStyles.background}>
      <SafeAreaView>
        <ScrollView>
          <Card>
            <Card.Title>{product?.nome}</Card.Title>
            <Card.Divider />
            <Card.Image
              style={cardStyles.image}
              source={{ uri: product.imagem }}
            />
            <Card.Divider />
            <Text style={cardStyles.text}>
              {product.descricao}
            </Text>
            <Text style={cardStyles.price}>Preço: R${product.valor}</Text>
            <Button
              onPress={HandleAddProduct}
              buttonStyle={buttonStyles.buttonStyle}
              title="Comprar"
            />
          </Card>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}