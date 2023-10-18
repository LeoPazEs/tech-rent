import { ImageBackground, ScrollView } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { Card } from '@rneui/themed';
import { buttonStyles } from '../styles/buttonStyle';
import { generalStyles } from '../styles/telaStyle';
import { cardStyles } from '../styles/cardStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import background from './../../../assets/imgs/background.jpg'
import macbook from './../../../assets/imgs/macbook-air-space-gray-select-201810.jpg'

export interface DetalheScreenProps {}

export function ProdutoDetalheScreen(props: DetalheScreenProps) {
    const navigation = useNavigation<any>();

  return (
    <ImageBackground source={background} style={generalStyles.background}>
      <SafeAreaView>
        <ScrollView>
          <Card>
            <Card.Title>MacBook Air</Card.Title>
            <Card.Divider />
            <Card.Image
              style={cardStyles.image}
              source={macbook}
            />
            <Card.Divider />
            <Text style={cardStyles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in leo vel odio bibendum vulputate.
                Proin aliquam massa vel mi lacinia, ac vehicula libero fringilla. Nulla facilisi. Integer nec velit non
                felis aliquet finibus. Suspendisse potenti. Sed elementum, elit at volutpat tincidunt, tellus justo
                viverra dui, sit amet laoreet arcu libero in quam. Phasellus varius justo in vehicula euismod.
                Suspendisse potenti.
            </Text>
            <Text style={cardStyles.price}>Preço: R$999.99</Text>
            <Button
              onPress={() => navigation.navigate('carrinho')}
              buttonStyle={buttonStyles.buttonStyle}
              title="Comprar"
            />
          </Card>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}