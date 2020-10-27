import {StyleSheet} from 'react-native';
export default StyleSheet.create(
{
    container: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop:80
      },
      titleText:{

        fontSize: 24,
        fontWeight: "bold",
        textAlign:'center',
        justifyContent:"center",
        paddingTop:10
      },
      titleText1:{

        fontSize: 22,
        fontWeight: "bold",
        textAlign:'justify',
        textAlign:'center',
        justifyContent:"center",
        marginTop:8
        
      },
      paraText:{
          marginLeft:20,
          marginBottom:3,
        fontSize: 16,
        width: '90%',
        paddingHorizontal: 10,
        marginVertical: 1,
        
        textAlign:'justify',
        alignItems:'center',
        alignContent:'center',
        alignItems:'center',
       // borderWidth: 1,
       // borderRadius: 3,
        //borderColor: "#ffffff",
       // color: "#333",
        backgroundColor: "#eff0f1", 
        //flexDirection:'row'
      },
      lineStyle:{
        borderWidth: 0.8,
        borderColor:'black', 
        margin:15
    },
    
      initial:
      {
        fontSize: 28,
      },
      image:{
          height:200,
          marginLeft:2,
          marginRight:2,
         alignContent:'center',
         alignItems:'center',
          width:200,
          resizeMode:'contain',
          flexWrap:'wrap'
          
          
      },
      flipcard:
      {
          
          height:220
      },
      outer:
      {
          height:320,
          backgroundColor:'#eff0f1',
        borderColor:'#eff0f1', 
          borderWidth:3,
          borderRadius:20,
          marginLeft:"5%",
          marginRight:"5%",
          overflow: 'hidden',
       //   shadowColor: '#ffffff',
          shadowRadius: 2,
          shadowOpacity: 0.2,
          marginBottom:5,
          
      }
})