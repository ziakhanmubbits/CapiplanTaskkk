import { StyleSheet } from "react-native";
import { width,height,totalSize } from "react-native-dimension";

export const styles = StyleSheet.create({
  container: { padding: 20, flexGrow: 1,alignItems:'center',backgroundColor:'#d5dbe2ff' },
  title: { fontSize: 24, marginBottom: 20,alignSelf:'center' },
  input: { 
    borderWidth: totalSize(.18),
    borderColor:'#CCCCCC',
     marginBottom: height(1.88), 
     paddingLeft:width(3.55),
      borderRadius: totalSize(1.4),
      width:width(85) ,
      height:height(7)},
      backgroundColor:'#FFFFFF',
  error: { color: 'red', marginBottom: 10, 
    alignSelf:'flex-start',
    paddingHorizontal:width(1.66)
  },
  link: { 
    marginTop: 10,
     color: '#1E5697',
     fontSize:totalSize(2)
     },
     linkdes:{
color:'#7C8B99'
     },
  headTitle:{fontSize: totalSize(4),color:'#333333',fontWeight:'500'},
  logindes:{
    color:'#6B7B8C',
    marginVertical:height(.4)
  },
  titleContainer:{
    paddingVertical:height(6),
  },
  subheadText:{
    alignItems:'center',
    paddingVertical:height(2)
  },
   logo:{
    width:width(30),
    height:height(14),
    borderRadius:totalSize(3)
  },
  forgetpasscont:{
    width:width(85) ,
      height:height(7),
      alignItems:'flex-end',
      top:-4,
  },
  forgetText:{
    color:'#1E5697'
  },
  secondcont:{
    position:'absolute',
    bottom:height(5)
  },
  buttonStyle:{
    width:width(85) ,
      height:height(7),
      backgroundColor:'#455A64',
      borderRadius: totalSize(1.4),
      alignItems:'center',
      justifyContent:'center'
  },
  btnText:{
    color:'#FFFFFF'
  },
  signupbuttontxtcontainer:{
width:width(85) ,
      height:height(7),
      alignItems:'center',
      marginBottom:-5,
      paddingVertical:height(.77)
  }
});