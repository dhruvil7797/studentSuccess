
import { StyleSheet } from "react-native"
import { ScrollView } from "react-native-gesture-handler";
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
      fontSize: 24,
      fontWeight: "bold",
      justifyContent:"center",
      paddingTop:10
    },
    titleText1:
      { 
      fontSize: 24,
      fontWeight: "bold",
      justifyContent:"center",
      marginLeft:80,
      flexWrap:'wrap'
      },

    paraText:{
      fontSize: 16,
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
    },
    scrollview:
    {
      flex:1
    },
    image1:
    {
      width:330,
      height:330
    },
    scrollviewset:
    {marginTop:-350,
      justifyContent:'space-between'
    },
    viewset:
    { height:150,
      marginTop: 15
    },
    imageview:
    {
      height:150, marginLeft:-60
    },
    imageview1:
    {
      height:150, 
      marginLeft:-60,
      marginRight:30
    },
    HeaderInsideText: {
      color: '#fff',
      fontSize: 18,
      textAlign: 'center',
    },
    imageprop:
    {
      flex:1,width:250,height:250,resizeMode:'cover'
    },
    MainContainer: {
      flex: 1,
      paddingTop: 60,
    },
    header: {
      position: 'absolute',
      width:500,
      top: 0,
      left: 0,
    },
    headerTitle: {
      letterSpacing: 0,
      textAlign: 'center',
      position: 'absolute',
      bottom: 16,
      zIndex: 99,
    },
    imageview1:
    {
      resizeMode: 'contain',
      position: 'absolute',
      right: 0,
      bottom: 0,
    },
  
    Header: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      left: 0,
      right: 0,
      top: 60,
    },
    
  });