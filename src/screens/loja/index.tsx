import * as React from 'react';
import { ImageBackground, ScrollView, View } from 'react-native';
import { Button,  Text,  } from 'react-native-elements';
import {  Card } from '@rneui/themed';
import { buttonStyles } from '../styles/buttonStyle';
import { generalStyles } from '../styles/telaStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import background from './../../../assets/imgs/background.jpg'
import macbook from './../../../assets/imgs/macbook-air-space-gray-select-201810.jpg'
import { StackNavigationProp } from '@react-navigation/stack'
import { NavegacaoPrincipalParams } from '../../navigations';
import { useNavigation } from '@react-navigation/native';

export interface LojacreenProps{}

export function Lojascreen(props: LojacreenProps){
    type navProps = StackNavigationProp<NavegacaoPrincipalParams, 'login'>;
    const navigation = useNavigation<navProps>();

    return (
        <ImageBackground source={background} style={generalStyles.background}>
        <SafeAreaView>
        <ScrollView >      
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
            <Text style={{ marginBottom: 10 }}>
                The idea with React Native Elements is more about component
                structure than actual design.
            </Text>
            <Button
                onPress={() => navigation.navigate('login')}
                buttonStyle={buttonStyles.buttonStyle}
                title="RENT"
            />
            </Card>   
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
            <Text style={{ marginBottom: 10 }}>
                The idea with React Native Elements is more about component
                structure than actual design.
            </Text>
            <Button
                onPress={() => navigation.navigate('login')}
                buttonStyle={buttonStyles.buttonStyle}
                title="RENT"
            />
            </Card>  
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
            <Text style={{ marginBottom: 10 }}>
                The idea with React Native Elements is more about component
                structure than actual design.
            </Text>
            <Button
                onPress={() => navigation.navigate('login')}
                buttonStyle={buttonStyles.buttonStyle}
                title="RENT"
            />
            </Card> 
        </ScrollView>
        </SafeAreaView>
        </ImageBackground>
    )

}