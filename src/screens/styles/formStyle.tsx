import { StyleSheet } from "react-native";

export const formStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputContainer: {borderRadius:30,  backgroundColor:'white', marginBottom:-10},
    fail: {
        textAlign:'center',
        color: 'red'
      },
  });