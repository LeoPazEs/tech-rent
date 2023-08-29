import * as React from 'react';
import { ImageBackground, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { styles } from './style';
import background from './../../../assets/imgs/background.jpg'
import { CardTitle } from '@rneui/base/dist/Card/Card.Title';

export interface LoginscreenProps{}

export function Loginscreen(props: LoginscreenProps){
    return (
        <ImageBackground source={background} style={styles.background}>
        <View style={styles.container}>
            <CardTitle style={{fontSize:'80'}}>Tech Rent</CardTitle>
            <Input placeholder='Digite seu e-mail' leftIcon={{name:'person', color:'black'}} inputContainerStyle={ styles.inputContainer} />
            <Input placeholder='Digite sua senha' leftIcon={{name:'lock', color:'black'}} secureTextEntry={true} inputContainerStyle={ styles.inputContainer}/>
            <Button title="LOGAR"  containerStyle={styles.buttonContainer}  titleStyle={{ color: 'white', marginHorizontal: 20 }} buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)'}}   type="outline" raised={true}  />

            <Button title="REGISTRAR-SE" containerStyle={styles.buttonContainer} titleStyle={{ color: 'white', marginHorizontal: 20 }} buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}   type="outline" raised={true}  />

        </View>
        </ImageBackground>
    )

}

