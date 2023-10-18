import { ImageBackground, ScrollView, StyleSheet} from 'react-native';
import { DataTable } from 'react-native-paper';
import { Button} from 'react-native-elements';
import { buttonStyles } from '../styles/buttonStyle';
import { generalStyles } from '../styles/telaStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { dataTableStyles } from '../styles/dataTableStyle';
import background from './../../../assets/imgs/background.jpg'

export interface CarrinhoScreenProps {}

export function CarrinhoScreen(props: CarrinhoScreenProps) {
    const navigation = useNavigation<any>();

  return (
    <ImageBackground source={background} style={generalStyles.background}>
      <SafeAreaView>
        <ScrollView>
            <DataTable style={dataTableStyles.container}> 
            <DataTable.Header style={dataTableStyles.tableHeader}> 
                <DataTable.Title textStyle = {dataTableStyles.titleText}>Produto</DataTable.Title> 
                <DataTable.Title textStyle = {dataTableStyles.titleText}>Quantidade</DataTable.Title> 
                <DataTable.Title textStyle = {dataTableStyles.titleText}>Valor</DataTable.Title> 
            </DataTable.Header> 
            <DataTable.Row> 
                <DataTable.Cell>MacBook Air</DataTable.Cell> 
                <DataTable.Cell>1</DataTable.Cell> 
                <DataTable.Cell>R$999.99</DataTable.Cell> 
            </DataTable.Row> 
            <DataTable.Row> 
                <DataTable.Cell>MacBook Air</DataTable.Cell> 
                <DataTable.Cell>1</DataTable.Cell> 
                <DataTable.Cell>R$999.99</DataTable.Cell> 
            </DataTable.Row> 
            <DataTable.Row> 
                <DataTable.Cell>MacBook Air</DataTable.Cell> 
                <DataTable.Cell>1</DataTable.Cell> 
                <DataTable.Cell>R$999.99</DataTable.Cell> 
            </DataTable.Row> 
            <DataTable.Row> 
                <DataTable.Cell>MacBook Air</DataTable.Cell> 
                <DataTable.Cell>1</DataTable.Cell> 
                <DataTable.Cell>R$999.99</DataTable.Cell> 
            </DataTable.Row> 
            <DataTable.Row> 
                <DataTable.Cell>MacBook Air</DataTable.Cell> 
                <DataTable.Cell>1</DataTable.Cell> 
                <DataTable.Cell>R$999.99</DataTable.Cell> 
            </DataTable.Row> 
            <DataTable.Row> 
                <DataTable.Cell>MacBook Air</DataTable.Cell> 
                <DataTable.Cell>1</DataTable.Cell> 
                <DataTable.Cell>R$999.99</DataTable.Cell> 
            </DataTable.Row> 
            <DataTable.Row> 
                <DataTable.Cell>MacBook Air</DataTable.Cell> 
                <DataTable.Cell>1</DataTable.Cell> 
                <DataTable.Cell>R$999.99</DataTable.Cell> 
            </DataTable.Row> 
            <DataTable.Row> 
                <DataTable.Cell>MacBook Air</DataTable.Cell> 
                <DataTable.Cell>1</DataTable.Cell> 
                <DataTable.Cell>R$999.99</DataTable.Cell> 
            </DataTable.Row> 
            <DataTable.Row> 
                <DataTable.Cell>MacBook Air</DataTable.Cell> 
                <DataTable.Cell>1</DataTable.Cell> 
                <DataTable.Cell>R$999.99</DataTable.Cell> 
            </DataTable.Row> 
            <DataTable.Row> 
                <DataTable.Cell>MacBook Air</DataTable.Cell> 
                <DataTable.Cell>1</DataTable.Cell> 
                <DataTable.Cell>R$999.99</DataTable.Cell> 
            </DataTable.Row>
            <DataTable.Header style={dataTableStyles.tableHeader}> 
                <DataTable.Title textStyle = {dataTableStyles.titleText}>Quantidade</DataTable.Title> 
                <DataTable.Title textStyle = {dataTableStyles.titleText}>Total</DataTable.Title> 
            </DataTable.Header> 
            <DataTable.Row> 
                <DataTable.Cell>10</DataTable.Cell> 
                <DataTable.Cell>R$9990.99</DataTable.Cell> 
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
