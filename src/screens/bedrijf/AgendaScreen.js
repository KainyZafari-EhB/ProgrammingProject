import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function AgendaScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../../assets/erasmuslogo.png')} style={styles.logo} />
        <Text style={styles.title}>AGENDA</Text>
        <Image source={require('../../../assets/logo3.png')} style={styles.logoRight} />
      </View>

      <View style={styles.content}>
        <Text style={styles.infoText}>Je hebt momenteel geen geplande activiteiten.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#e0f7fa', padding: 16 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: { width: 50, height: 50, resizeMode: 'contain' },
  logoRight: { width: 30, height: 30, resizeMode: 'contain' },
  title: { fontSize: 20, fontWeight: 'bold' },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoText: { fontSize: 16, color: '#555' },
});


