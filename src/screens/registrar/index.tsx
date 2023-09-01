import * as React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { ImageBackground, View } from 'react-native';
import { Input, Button,  Text,  } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'
import { NavegacaoPrincipalParams } from '../../navigations';
import { CardTitle } from '@rneui/base/dist/Card/Card.Title';
import { styles } from '../formStyle';
import background from './../../../assets/imgs/background.jpg'

export interface RegistrarscreenProps{}

export function Registrarscreen(props: RegistrarscreenProps){
    type navProps = StackNavigationProp<NavegacaoPrincipalParams, 'login'>;
    const navigation = useNavigation<navProps>();
    return (
        <ImageBackground source={background} style={styles.background}>
        <View style={styles.container}>
            <Formik  initialValues={{email: '', senha: '', confirmaSenha:'' }} validationSchema={Yup.object().shape({
            email: Yup.string().required('Informe o email.').email('E-mail não válido'),
            senha: Yup.string().required('Informe a senha.').min(6, 'A senha precisa ter no mínimo 6 caracteres'),
            confirmaSenha : Yup.string().oneOf([Yup.ref('senha')], 'Senhas devem ser iguais.')
            })} onSubmit = {() => console.log("A")}>
                {({errors, touched, handleSubmit, handleChange, handleBlur}) => (
                    <>
                        <CardTitle style={{fontSize:50}}>Registrar-se</CardTitle>
                        <Input placeholder='Digite seu e-mail'  onBlur={handleBlur('email')} onChangeText={handleChange('email')} leftIcon={{name:'person', color:'black'}} inputContainerStyle={ styles.inputContainer } />
                        <Input placeholder='Digite sua senha'  onBlur={handleBlur('senha')} onChangeText={handleChange('senha')} leftIcon={{name:'lock', color:'black'}} secureTextEntry={true} inputContainerStyle={ styles.inputContainer}/>
                        <Input placeholder='Confirme sua senha' onBlur={handleBlur('confirmaSenha')} onChangeText={handleChange('confirmaSenha')} leftIcon={{name:'lock', color:'black'}} secureTextEntry={true} inputContainerStyle={ styles.inputContainer}/>
                        { errors.email && touched.email && <Text style={styles.fail}>{errors.email}</Text>}
                        { errors.senha && touched.senha && <Text style={styles.fail}>{errors.senha}</Text>}
                        { errors.confirmaSenha && touched.confirmaSenha && <Text style={styles.fail}>{errors.confirmaSenha}</Text>}
                        <Button title="REGISTRAR-SE" onPress={() => handleSubmit()} containerStyle={styles.buttonContainer}  titleStyle={styles.buttonTitle} buttonStyle={styles.buttonStyle}  type="outline" raised={true}  />
                        <Button title="VOLTAR" onPress={() => navigation.navigate('login')} containerStyle={styles.buttonContainer}  titleStyle={styles.buttonTitle} buttonStyle={styles.buttonStyle}  type="outline" raised={true}  />
                    </>
                )}
            </Formik>
         

        </View>
        </ImageBackground>
    )

}

