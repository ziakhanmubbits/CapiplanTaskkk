import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { width } from 'react-native-dimension';

const screenWidth = Dimensions.get('window').width;

export default function FinancesComponents({ data = [], onModulePress }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Finances at a Glance</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        key={'2column'}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => onModulePress && onModulePress(item.title)}
          >
            <Text style={styles.cardTitle}>{item.title}</Text>
            {item.subtitle && <Text style={styles.cardSub}>{item.subtitle}</Text>}
            {item.description && <Text style={styles.cardDesc}>{item.description}</Text>}
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
  title: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#333',
  },
  list: { paddingBottom: 10 },
  row: {
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#EFFFFF',
    borderRadius: 12,
    width: width(39),
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 4,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  cardSub: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginTop: 5,
  },
  cardDesc: {
    fontSize: 12,
    color: '#777',
    textAlign: 'center',
    marginTop: 4,
  },
});
