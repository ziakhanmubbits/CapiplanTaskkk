import React from 'react';
import { width, height, totalSize } from 'react-native-dimension';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const modules = [
  { id: '1', title: 'Cash & Bank' },
  { id: '2', title: 'Sales' },
  { id: '3', title: 'Purchases' },
  { id: '4', title: 'Customer' },
  { id: '5', title: 'Supplier' },
  { id: '6', title: 'Inventory' },
  { id: '7', title: 'Services' },
];

const screenWidth = Dimensions.get('window').width;

export default function ComponentsSection({ onModulePress }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={modules}
        horizontal
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => onModulePress && onModulePress(item.title)}
          >
            <Text style={styles.cardText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical:height(6) ,
  },
  list: {
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: '#E6E6E6',
    paddingVertical: 13,
    paddingHorizontal: 15,
    borderRadius: 12,
    marginRight: 10,
    minWidth: screenWidth * 0.35,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 4,
    marginBottom:4
  },
  cardText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
});
