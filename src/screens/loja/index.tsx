import { ImageBackground, ScrollView } from 'react-native';
import { Button,  Text,  } from 'react-native-elements';
import {  Card } from '@rneui/themed';
import { buttonStyles } from '../styles/buttonStyle';
import { generalStyles } from '../styles/telaStyle';
import { cardStyles } from '../styles/cardStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import background from './../../../assets/imgs/background.jpg'
import macbook from './../../../assets/imgs/macbook-air-space-gray-select-201810.jpg'


export interface LojacreenProps{}

export function Lojascreen(props: LojacreenProps){
    const navigation = useNavigation<any>();

    return (
        <ImageBackground source={background} style={generalStyles.background}>
        <SafeAreaView>
        <ScrollView >      
            <Card>
            <Card.Title>MacBook Air</Card.Title>
            <Card.Divider />
            <Card.Image
                style={cardStyles.image}
                source={macbook}
            />
            <Text style={cardStyles.text}>
                The idea with React Native Elements is more about component
                structure than actual design.
            </Text>
            <Button
                onPress={() => navigation.navigate('detalhe')}
                buttonStyle={buttonStyles.buttonStyle}
                title="Detalhes"
            />
            </Card>   
            <Card>
            <Card.Title>MacBook Air</Card.Title>
            <Card.Divider />
            <Card.Image
                style={cardStyles.image}
                source={macbook}
            />
            <Text style={cardStyles.text}>
                The idea with React Native Elements is more about component
                structure than actual design.
            </Text>
            <Button
                onPress={() => navigation.navigate('detalhe')}
                buttonStyle={buttonStyles.buttonStyle}
                title="Detalhes"
            />
            </Card>  
            <Card>
            <Card.Title>MacBook Air</Card.Title>
            <Card.Divider />
            <Card.Image
                style={cardStyles.image}
                source={macbook}
            />
            <Text style={cardStyles.text}>
                The idea with React Native Elements is more about component
                structure than actual design.
            </Text>
            <Button
                onPress={() => navigation.navigate('detalhe')}
                buttonStyle={buttonStyles.buttonStyle}
                title="Detalhes"
            />
            </Card> 
        </ScrollView>
        </SafeAreaView>
        </ImageBackground>
    )

}