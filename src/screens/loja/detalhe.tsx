import { ImageBackground, ScrollView } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { Card } from '@rneui/themed';
import { buttonStyles } from '../styles/buttonStyle';
import { generalStyles } from '../styles/telaStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import background from './../../../assets/imgs/background.jpg'
import macbook from './../../../assets/imgs/macbook-air-space-gray-select-201810.jpg'
import { useNavigation } from '@react-navigation/native';

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
              style={{
                width: '100%',
                height: undefined,
                aspectRatio: 1,
              }}
              source={macbook}
            />
            <Card.Divider />
            <Text style={{ marginBottom: 10 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in leo vel odio bibendum vulputate.
                Proin aliquam massa vel mi lacinia, ac vehicula libero fringilla. Nulla facilisi. Integer nec velit non
                felis aliquet finibus. Suspendisse potenti. Sed elementum, elit at volutpat tincidunt, tellus justo
                viverra dui, sit amet laoreet arcu libero in quam. Phasellus varius justo in vehicula euismod.
                Suspendisse potenti.
            </Text>
            <Text style={{fontWeight: "bold", marginBottom: 10}}>Preço: R$999.99</Text>
            <Button
              onPress={() => navigation.navigate('loja1')}
              buttonStyle={buttonStyles.buttonStyle}
              title="Comprar"
            />
          </Card>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}