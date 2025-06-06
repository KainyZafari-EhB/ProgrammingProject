import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';


const appointments = [
  {
    id: '1',
    time: '09:00 - 09:05',
    company: 'Deloitte',
  },
  // Meer afspraken hier indien nodig
];

export default function AgendaScreen({ navigation }) {
  const handlePress = (appointment) => {
    navigation.navigate('AfspraakDetail', {
      time: appointment.time,
      company: appointment.company,
    });
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Image
          source={require('../../../assets/erasmuslogo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.profileCircle}>
          <Text style={styles.profileText}>F</Text>
        </View>
      </View>

      {/* WITTE BOX */}
      <View style={styles.whiteBox}>
        <Text style={styles.title}>AGENDA</Text>
        <Text style={styles.subtitle}>Afspraken</Text>

        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingTop: 10 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.appointmentItem}
              onPress={() => handlePress(item)}
            >
              <Text style={styles.time}>{item.time}</Text>
              <Text style={styles.company}>{item.company}</Text>
            </TouchableOpacity>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 40,
  },
  logo: {
    width: 110,
    height: 60,
    resizeMode: 'contain',
  },
  profileCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  profileText: {
    color: '#A3EEFF',
    fontSize: 24,
  },
  whiteBox: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 120,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginTop: 4,
    marginBottom: 16,
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
