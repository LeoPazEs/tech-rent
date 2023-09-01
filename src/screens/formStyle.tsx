import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: { width: '100%', height: '100%'},
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputContainer: {borderRadius:30,  backgroundColor:'white', marginBottom:-10},
    buttonContainer : {
        width: 200,
        marginHorizontal: 50,
        marginVertical: 10,
      },
    buttonTitle : { color: 'white', marginHorizontal: 20 },
    buttonStyle : { backgroundColor: 'rgba(39, 39, 39, 1)'},
    fail: {
        textAlign:'center',
        color: 'red'
      },
  });