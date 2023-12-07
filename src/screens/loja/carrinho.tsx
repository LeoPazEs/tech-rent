import React from 'react';
import { ImageBackground, ScrollView, StyleSheet} from 'react-native';
import { DataTable } from 'react-native-paper';
import { Button} from 'react-native-elements';
import { buttonStyles } from '../styles/buttonStyle';
import { generalStyles } from '../styles/telaStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { dataTableStyles } from '../styles/dataTableStyle';
import { getAuth } from '@firebase/auth';
import { getFirestore, getDoc, doc} from '@firebase/firestore';
import { toastConfig } from '../styles/toastStyle';
import Toast from 'react-native-root-toast';
import background from './../../../assets/imgs/background.jpg'

export interface CarrinhoScreenProps {}

export function CarrinhoScreen(props: CarrinhoScreenProps) {
    const navigation = useNavigation<any>();

    
    const [productData, setProductData] = React.useState<any[]>([]);
    
    React.useEffect(() => {
        handleProducts();
    }, []);
    
    const handleProducts = async () => {
        try {
            const auth = getAuth();
            const db = getFirestore();
            const carrinho = doc(db, "carrinhos", auth.currentUser.uid);
            const resultados = await getDoc(doc(db, "carrinhos", auth.currentUser.uid));
            const produtos = resultados.data().produtos;
            const productDetails = await Promise.all(
                produtos.map(async (productId: string) => {
                    const productDoc = await getDoc(doc(db, "produtos", productId));
                    return { id: productDoc.id, ...productDoc.data() };
                })
            );
            setProductData(productDetails);
        } catch (error) {
            Toast.show("Um erro ocorreu, tente novamente.",toastConfig)
        }
    };


  return (
    <ImageBackground source={background} style={generalStyles.background}>
      <SafeAreaView>
        <ScrollView>
            <DataTable style={dataTableStyles.container}> 
            <DataTable.Header style={dataTableStyles.tableHeader}> 
                <DataTable.Title textStyle = {dataTableStyles.titleText}>Produto</DataTable.Title> 
                <DataTable.Title textStyle = {dataTableStyles.titleText}>Valor</DataTable.Title> 
            </DataTable.Header>
            {productData.map((product, index) => (
                <DataTable.Row key={index}> 
                    <DataTable.Cell>{product.nome}</DataTable.Cell> 
                    <DataTable.Cell>R${product.valor}</DataTable.Cell>
                </DataTable.Row>
            ))} 
            <DataTable.Header style={dataTableStyles.tableHeader}> 
                <DataTable.Title textStyle = {dataTableStyles.titleText}>Total</DataTable.Title> 
            </DataTable.Header> 
            <DataTable.Row> 
                <DataTable.Cell>R${productData.reduce((total, product) => total + product.valor, 0)}</DataTable.Cell> 
            </DataTable.Row>
            <Button
              onPress={() => navigation.navigate('loja1')}
              buttonStyle={buttonStyles.buttonStyle}
              title="Finalizar Compra"
            />
            </DataTable> 
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}
