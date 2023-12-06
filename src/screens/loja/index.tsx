import React from 'react';
import { ImageBackground, ScrollView } from 'react-native';
import { Button,  Text,  } from 'react-native-elements';
import {  Card } from '@rneui/themed';
import { buttonStyles } from '../styles/buttonStyle';
import { generalStyles } from '../styles/telaStyle';
import { cardStyles } from '../styles/cardStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { getFirestore, getDocs, collection} from '@firebase/firestore';
import background from './../../../assets/imgs/background.jpg'
import macbook from './../../../assets/imgs/macbook-air-space-gray-select-201810.jpg'


export interface LojacreenProps{}

export function Lojascreen(props: LojacreenProps){
    const navigation = useNavigation<any>();
    
    const db = getFirestore();
    const [productData, setProductData] = React.useState<any[]>([]);

    
    React.useEffect(() => {
        handleProducts();
    });
    
    const handleProducts = async () => {
        const resultados = await getDocs(collection(db, "produtos"));
        const data = resultados.docs.map((doc) => doc.data());
        setProductData(data);
    };

    return (
        <ImageBackground source={background} style={generalStyles.background}>
        <SafeAreaView>
        <ScrollView > 
        {productData.map((product, index) => (
            <Card key={index}>
              <Card.Title>{product.nome}</Card.Title>
              <Card.Divider />
              <Card.Image style={cardStyles.image} source={{ uri: product.imagem }} />
              <Text style={cardStyles.text}>{product.descricao_resumida}</Text>
              <Button
                onPress={() => navigation.navigate('detalhe', { product })}
                buttonStyle={buttonStyles.buttonStyle}
                title="Detalhes"
              />
            </Card>
          ))}
        </ScrollView>
        </SafeAreaView>
        </ImageBackground>
    )

}