import { useState  } from 'react';
import { ImageBackground, View, TouchableOpacity, Image as ImageNative } from 'react-native';
import { Image, Text } from 'react-native-elements';
import { generalStyles } from '../styles/telaStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import * as ImagePicker from 'expo-image-picker';

import { perfilStyles } from '../styles/perfilStyle';

import background from './../../../assets/imgs/background.jpg'
import profile from './../../../assets/imgs/profile.jpg'

export interface PerfilScreenProps {}

export function PerfilScreen(props: PerfilScreenProps) {
    const navigation = useNavigation<any>();
    
    const [image, setImage] = useState(ImageNative.resolveAssetSource(profile).uri);
    const openCamera = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
          
          if (!result.canceled) {
              setImage(result.assets[0].uri);
          }
      };

  return (
    <ImageBackground source={background} style={generalStyles.background}>
      <SafeAreaView>
        <View>
            <View style= {{justifyContent: "center",alignItems: "center"}} >
            <Text style = {perfilStyles.textName} >Profile</Text>
                <TouchableOpacity onPress={openCamera}>
                    <Image source={{uri : image}}  style={perfilStyles.image}></Image>
                </TouchableOpacity>
            </View>
            <View style = {perfilStyles.informationBox} >
                <View style = {{ margin: 20 }}>
                <View style = {{justifyContent: "center", alignItems: "center"}}>
                    <Text style={perfilStyles.textName}>John Does</Text>

                </View>
                <View style = {perfilStyles.informationLowerView}>
                    <Text style={perfilStyles.textInfo}>Data Nascimento: </Text>
                    <Text style={perfilStyles.textInfo}>04/05/2001</Text>
                </View>
                <View style = {perfilStyles.informationLowerView}>
                    <Text style={perfilStyles.textInfo}>Email: </Text>
                    <Text style={perfilStyles.textInfo}>john.doe@example.com</Text>
                </View>
                <View style = {perfilStyles.informationLowerView}>
                    <Text style={perfilStyles.textInfo}>Endereço: </Text>
                    <Text style={perfilStyles.textInfo}>1234 Elm Street, Apt 567, Springfield</Text>
                </View>
                </View>
            </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
