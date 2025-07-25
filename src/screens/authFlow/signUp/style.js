import { StyleSheet } from "react-native";
import { width,height,totalSize } from "react-native-dimension";
export const Styles = StyleSheet.create({
  container: {
    padding: 5,
   flexGrow: 1,alignItems:'center',backgroundColor:'#d5dbe2ff'
  },
  tophead:{
    width:width(85),
    alignItems:'flex-start',
    paddingVertical:height(3)
  },
 heading:{fontSize: totalSize(4),color:'#333333',fontWeight:'500'},
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
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
  },
  link: {
    fontSize: 15,
    color: '#007AFF',
    textAlign: 'center',
    marginTop: 10,
  },
   secondcont:{
    position:'absolute',
    bottom:0
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