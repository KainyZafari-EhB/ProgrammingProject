import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function RoleSelectScreen({ onSelect }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kies je rol:</Text>
      <TouchableOpacity style={styles.button} onPress={() => onSelect('student')}>
        <Text>Student</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => onSelect('bedrijf')}>
        <Text>Bedrijf</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => onSelect('admin')}>
        <Text>Admin</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
  button: {
    backgroundColor: '#eee',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    width: 200,
    alignItems: 'center',
  },
});
