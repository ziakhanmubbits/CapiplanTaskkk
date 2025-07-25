import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension'; 

const CustomInput = ({ label, value, onChangeText, placeholder, error }) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#999"
        value={value}
        onChangeText={onChangeText}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: height(1.88),
  },
  label: {
    fontSize: totalSize(1.8),
    color: '#333333',
    marginBottom: height(0.6),
    paddingHorizontal: width(.55),
    fontWeight: '500',
  },
  input: {
    borderWidth: totalSize(0.18),
    borderColor: '#CCCCCC',
    paddingLeft: width(3.55),
    borderRadius: totalSize(1.4),
    width: width(85),
    height: height(7),
    backgroundColor: '#FFFFFF',
  },
  error: {
    color: 'red',
    marginTop: height(0.6),
    paddingHorizontal: width(1.66),
    fontSize: totalSize(1.4),
  },
});

export default CustomInput;
