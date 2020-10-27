
import { Platform, StyleSheet } from "react-native"
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
    pageContainer:
    {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      width: '100%',
    },
    HeaderInsideText: {
    
      flex:1,
      
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
      marginVertical: 30,
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
      elevation: 16,
      backgroundColor: "#4facf6",
      alignItems:'center',
      borderRadius: 10,
      paddingVertical: 20,
      paddingHorizontal: 24,
      width:200
    },
    titleText:{

      fontSize: 24,
      fontWeight: "bold",
      textAlign:'center',
      justifyContent:"center",
      paddingTop:30
    },
    titleText1:
      { 
      fontSize: 24,
      fontWeight: "bold",
      justifyContent:"center",
      textAlign:'center',
      flexWrap:'wrap',
      paddingTop:5,
      marginBottom:10
      },
      titleText2:
      { 
      fontSize: 24,
      fontWeight: "bold",
      textAlign:'center',
      justifyContent:"center",
      flexWrap:'wrap',
      paddingTop:30,
      marginBottom:20
      },


    paraText:{
      fontSize: 16,
      //width: '100%',
     
      textAlign: "justify",
     // paddingHorizontal: 30,
      marginVertical: 1,
     // borderWidth: 1,
     // borderRadius: 3,
      //borderColor: "#ffffff",
      //color: "#333",
      backgroundColor: "#ffffff", 
      flex:1
    },
    paraText1:{
      fontSize:20,
      flex:1
      
    },
    flipcard:
    {
      width: '100%',
      height: '100%',
     
    },
    
    paraText2:{
      fontSize:20,
      paddingTop:5,
      paddingBottom:20,
      
      
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
    {marginTop:50,
      justifyContent:'space-between',
      marginBottom:10
    },
    viewset:
    { height:150,
      marginTop: 15
    },
    imageview:
    {
      height:150,
      
      
    
      //marginLeft:Platform.OS =='ios' ? -60 : -80
      
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
      marginLeft:-30,
      marginRight:-30,
      flex:1,width:250,height:250,resizeMode:'cover',
      paddingBottom:-20,
      shadowOpacity:0.05,
      shadowRadius:1,
      shadowColor: "#000",
            shadowOffset: {
              width: 10,
              height: 10}
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
    Header: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      left: 0,
      right: 0,
      top: 60,
    },
    
  });