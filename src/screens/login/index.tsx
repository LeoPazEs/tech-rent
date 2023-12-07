import * as Yup from 'yup';
import { Formik } from 'formik';
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import { ImageBackground, View } from 'react-native';
import { Input, Button,  Text,  } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'
import { NavegacaoPrincipalParams } from '../../navigations';
import { CardTitle } from '@rneui/base/dist/Card/Card.Title';
import { formStyles } from '../styles/formStyle';
import { buttonStyles } from '../styles/buttonStyle';
import { generalStyles } from '../styles/telaStyle';
import { toastConfig } from '../styles/toastStyle';
import Toast from 'react-native-root-toast';
import background from './../../../assets/imgs/background.jpg'

export interface LoginscreenProps{}

export function Loginscreen(props: LoginscreenProps){
    type navProps = StackNavigationProp<NavegacaoPrincipalParams, 'registrar', 'loja'>;
    const navigation = useNavigation<navProps>();
    
    const handleLogin = async (values: any) => {
        const auth = getAuth();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, values.email, values.senha);
            Toast.show('Usuário logado com sucesso.',toastConfig)
            navigation.navigate('autenticado');
        } catch (error) {
            Toast.show("usuário ou senha incorreto, tente novamente.",toastConfig)
        }
    }

    return (
        <ImageBackground source={background} style={generalStyles.background}>
        <View style={formStyles.container}>
            <Formik  initialValues={{email: '', senha: ''}} validationSchema={Yup.object().shape({
            email: Yup.string().required('Informe o email.').email('E-mail não válido'),
            senha: Yup.string().required('Informe a senha.')
            })} onSubmit = {handleLogin}>
                {({errors, touched, handleSubmit, handleChange, handleBlur}) => (
                    <>
                        <CardTitle style={{fontSize:80}}>Tech Rent</CardTitle>
                        <Input placeholder='Digite seu e-mail' onBlur={handleBlur('email')} onChangeText={handleChange('email')} leftIcon={{name:'person', color:'black'}} inputContainerStyle={ formStyles.inputContainer } />
                        <Input placeholder='Digite sua senha'  onBlur={handleBlur('senha')} onChangeText={handleChange('senha')} leftIcon={{name:'lock', color:'black'}} secureTextEntry={true} inputContainerStyle={ formStyles.inputContainer}/>
                        { errors.email && touched.email && <Text style={formStyles.fail}>{errors.email}</Text>}
                        { errors.senha && touched.senha && <Text style={formStyles.fail}>{errors.senha}</Text>}
                        <Button title="ENTRAR" onPress={() => handleSubmit()} containerStyle={buttonStyles.buttonContainer}  titleStyle={buttonStyles.buttonTitle} buttonStyle={buttonStyles.buttonStyle}   type="outline" raised={true}  />
                        <Button title="CADASTRAR-SE" onPress={() => navigation.navigate('registrar')} containerStyle={buttonStyles.buttonContainer}  titleStyle={buttonStyles.buttonTitle} buttonStyle={buttonStyles.buttonStyle}  type="outline" raised={true}  />
                    </>
                )}
            </Formik>
         

        </View>
        </ImageBackground>
    )

}

