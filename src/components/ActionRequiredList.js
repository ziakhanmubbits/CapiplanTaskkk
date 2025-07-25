import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { width,height,totalSize } from "react-native-dimension";

const ActionRequiredList = ({ data = [], onViewPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Action Required</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>

            <View style={styles.row}>
              <Text style={styles.label}>30 Days (Amt/No):</Text>
              <Text style={styles.value}>{item.currentAmount} / {item.currentCount}</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Previous 30 Days (Amt/No):</Text>
              <Text style={styles.value}>{item.previousAmount} / {item.previousCount}</Text>
            </View>

            <TouchableOpacity onPress={() => onViewPress?.(item)} style={styles.viewWrapper}>
              <Text style={styles.viewText}>View</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default ActionRequiredList;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#F6F9FC',
    width:width(93)
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  card: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#222',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  label: {
    fontSize: 12,
    color: '#333',
    fontWeight:'500'
  },
  value: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#222',
  },
  viewWrapper: {
    marginTop: 8,
  },
  viewText: {
    color: '#007BFF',
    fontSize: 14,
  },
});
