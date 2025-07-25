import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';

export default function Header({ navigation }) {
  return (
    <View style={styles.header}>
      <View style={styles.menucont}>
        <Image style={styles.logo} source={require('../assets/logo.jpeg')} />
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Text style={styles.menu}>☰</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.subheader}>
        <View style={styles.statuscontainer}>
        <Text style={styles.info}>Sales Current Month</Text>
        <Text style={styles.info}>AED 5,4000.00</Text>
        </View>
        <View style={styles.statuscontainer}>
        <Text style={styles.info}>Outstanding Invoices</Text>
        <Text style={styles.info}>AED 4000.00</Text>
        </View>
        <View style={styles.statuscontainer}>
        <Text style={styles.info}>Unpaid Bills</Text>
        <Text style={styles.info}>AED 4000.00</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { backgroundColor: '#2c3e50',
     borderBottomLeftRadius:20,
     borderBottomRightRadius:20,
     height:height(20),
     alignItems:'center'
     },
  menu: { fontSize: 30, color: '#fff' },
  menucont:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:width(85)
  },
  logo: { 
     width:width(8.44),
     height:height(4),
     borderRadius:totalSize(2)
     },
  info: { fontSize: 12, color: '#fff', fontWeight:'500'},
  subheader:{
    width:width(85),
    paddingVertical:height(1),
  },
  statuscontainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:width(85),
    marginVertical:height(.55)
  }
});
