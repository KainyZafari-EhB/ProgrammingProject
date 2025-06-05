import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

const appointments = [
  {
    id: '1',
    time: '09:00 - 09:05',
    company: 'Deloitte',
  },
  // Voeg hier meer afspraken toe indien nodig
];

export default function AgendaScreen() {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Image
          source={require('../../../assets/erasmuslogo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* TITEL */}
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>AGENDA</Text>
        <Text style={styles.subtitle}>Afspraken</Text>
      </View>

      {/* AGENDA */}
      <View style={styles.agendaBox}>
        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.appointmentItem}>
              <Text style={styles.time}>{item.time}</Text>
              <Text style={styles.company}>{item.company}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A3EEFF',
  },
  header: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 40,
  },
  titleWrapper: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingVertical: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginTop: 4,
  },
  agendaBox: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  appointmentItem: {
    backgroundColor: '#EAEAEA',
    padding: 12,
    marginVertical: 8,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  time: {
    fontSize: 14,
    color: '#333',
  },
  company: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
});
