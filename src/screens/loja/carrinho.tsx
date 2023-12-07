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
import { getFirestore, getDoc, doc, setDoc} from '@firebase/firestore';
import { toastConfig } from '../styles/toastStyle';
import Toast from 'react-native-root-toast';
import background from './../../../assets/imgs/background.jpg'

export interface CarrinhoScreenProps {}

export function CarrinhoScreen(props: CarrinhoScreenProps) {
    const navigation = useNavigation<any>();

    
    const [productData, setProductData] = React.useState<any[]>([]);
    
    const auth = getAuth();
    const db = getFirestore();
    
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            handleProducts();
        });

        return unsubscribe;
    }, [navigation]);
    
    const handleProducts = async () => {
        try {
            const carrinho = doc(db, "carrinhos", auth.currentUser.uid);
            const resultados = await getDoc(doc(db, "carrinhos", auth.currentUser.uid));
            const produtos = resultados.data().produtos;
            const productDetails = await Promise.all(
                produtos.map(async (productId: string) => {
                    const productDoc = await getDoc(doc(db, "produtos", productId));
                    return { id: productDoc.id, ...productDoc.data()}; 
                })
            );
            
            setProductData(productDetails);
        } catch (error) {
            Toast.show("Um erro ocorreu, tente novamente.",toastConfig)
        }
    };

    const handleDeletarProduto = async (productId: string) => {
        try {
            const carrinho = doc(db, "carrinhos", auth.currentUser.uid);
            const resultados = await getDoc(doc(db, "carrinhos", auth.currentUser.uid));
            const produtos = resultados.data().produtos;
            const newProducts = produtos.filter((product: string) => product !== productId);
            await setDoc(carrinho, { produtos: newProducts });
            handleProducts();
            Toast.show("Produto deletado com sucesso.",toastConfig)
        } catch (error) {
            Toast.show("Um erro ocorreu, tente novamente.",toastConfig)
        }
    }

  return (
    <ImageBackground source={background} style={generalStyles.background}>
      <SafeAreaView>
        <ScrollView>
            <DataTable style={dataTableStyles.container}> 
            <DataTable.Header style={dataTableStyles.tableHeader}> 
                <DataTable.Title textStyle = {dataTableStyles.titleText}>Produto</DataTable.Title> 
                <DataTable.Title textStyle = {dataTableStyles.titleText}>Valor</DataTable.Title> 
                <DataTable.Title textStyle = {dataTableStyles.titleText}>Deletar</DataTable.Title>
            </DataTable.Header>
            {productData.map((product, index) => (
                <DataTable.Row key={index}> 
                    <DataTable.Cell>{product.nome}</DataTable.Cell> 
                    <DataTable.Cell>R${product.valor}</DataTable.Cell>
                    <DataTable.Cell><Button
                        onPress={() => handleDeletarProduto(product.id)}
                        buttonStyle={buttonStyles.buttonStyle}
                        title="Deletar"/>
                    </DataTable.Cell>
                </DataTable.Row>
            ))} 
            <DataTable.Header style={dataTableStyles.tableHeader}> 
                <DataTable.Title textStyle = {dataTableStyles.titleText}>Total</DataTable.Title> 
            </DataTable.Header> 
            <DataTable.Row> 
                <DataTable.Cell>R${productData.reduce((total, product) => total +  parseFloat(product.valor), 0)}</DataTable.Cell> 
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
