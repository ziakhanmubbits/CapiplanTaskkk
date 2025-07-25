import { StyleSheet } from "react-native";
import { width,height,totalSize } from "react-native-dimension";
export const styles = StyleSheet.create({
  container: { flex: 1 },
  sectionTitle: { fontSize: 20, marginVertical: 10 },
  swipiconstyle: { flexDirection: 'row', gap: 10 },
  titleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  icon: { fontSize: 20 },
  card: {  borderRadius: 10, marginTop: 10,
    backgroundColor:'#FFFFFF'
   },
  cardTitle: { fontSize: 20, marginBottom: 10,fontWeight:'500',paddingLeft:6,paddingTop:10 },
  transact:{
    width:width(82),alignSelf:'center'
  },
});