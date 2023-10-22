import { StyleSheet} from 'react-native';

export const perfilStyles = StyleSheet.create({ 
    image : {
        width: 300,
        height: 300,
        borderRadius: 150,
      },
    
    textName : { margin: 10 , fontWeight: "bold", fontSize: 25},
    textInfo: {margin: 2, fontSize: 15},
    informationLowerView : {flexDirection: 'row', justifyContent: 'space-between'},
    informationBox : {backgroundColor: "white", margin: 10 ,  borderRadius: 20}
  });