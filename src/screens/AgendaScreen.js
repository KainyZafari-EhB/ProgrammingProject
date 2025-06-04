import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AgendaScreen() {
  return (
    <View style={styles.container}>
      <Text>Agenda-pagina</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});
