
import { StyleSheet } from "react-native"
const fontSize = 14
export default StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
    text: {
      width: '90%',
      height: 65,
      paddingHorizontal: 10,
      marginVertical: 5,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: "#ffffff",
      color: "#333",
      backgroundColor: "#ffffff",
      
    },
    animatedInput: {
      width:  '100%',
      height: 50,
      fontSize: 20,
      paddingHorizontal: 10,
      marginVertical: 5,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: "#ffffff",
      color: "#333",
      backgroundColor: "#f8f8f8",
      
    },
    animatedForm:{
      width:  '80%',
      
    },
    image:{
  
      width:'90%',
      height: 150,
      resizeMode: 'stretch',
      paddingHorizontal: 150,
      marginVertical: 90,
    },
      
    button: {
      marginTop : 30,
      alignItems:'center',
      justifyContent:'center',
      
      borderRadius: 5,
      height:50,
      width:'100%',
    },
    appButtonContainer: {
      elevation: 8,
      backgroundColor: "#4facf6",
      alignItems:'center',
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
      width:200
    },
    titleText:{
      fontSize: 20,
      fontWeight: "bold"
    },

    paraText:{
      fontSize: fontSize,
      width: '100%',
      height: 500,
      textAlign: "justify",
      paddingHorizontal: 30,
      marginVertical: 3,
      borderWidth: 1,
      borderRadius: 3,
      borderColor: "#ffffff",
      color: "#333",
      backgroundColor: "#ffffff", 
    },

    initial:
    {
      fontSize: fontSize * 2,
    }

  
  });