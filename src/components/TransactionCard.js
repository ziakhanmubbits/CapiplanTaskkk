// components/TransactionCard.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { width,height,totalSize } from "react-native-dimension";

const TransactionCard = ({ item }) => {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View style={{ flex: 1 }}>
          <Text style={styles.company}>{item.company}</Text>
          <Text style={styles.type}>{item.type}</Text>
          <Text style={styles.date}>🕒 {item.date}</Text>
          <Text style={styles.user}>User: {item.user}</Text>
        </View>
        <Text style={[styles.amount, { color: item.color === 'red' ? 'red' : 'green' }]}>
          {item.amount}
        </Text>
      </View>
      <View style={styles.separator} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
    width:width(80),
    alignSelf:'center'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  company: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 2,
  },
  type: {
    color: '#555',
    marginBottom: 4,
  },
  date: {
    fontSize: 12,
    color: '#777',
  },
  user: {
    fontSize: 12,
    color: '#777',
  },
  amount: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginTop: 10,
  },
});

export default TransactionCard;
