import React from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // npm install @react-native-picker/picker



const studentsData = [
  { id: '1', name: 'Ilyas Fariss', opleiding: 'Toegepaste Informatica', color: '#90ee90' },
  { id: '2', name: 'Hana Amrani', opleiding: 'Toegepaste Informatica', color: '#ff69b4' },
  { id: '3', name: 'Adam Akkay', opleiding: 'Multimedia en Creatieve technologie', color: '#add8e6' },
  { id: '4', name: 'Adam Jaidi', opleiding: 'Toegepaste Informatica', color: '#9acd32' },
];

const opleidingen = [
  'Toegepaste Informatica',
  'Multimedia en Creatieve technologie',
  'Graduaat Programmeren',
  'Graduaat Systeem- en Netwerkbeheer',
];

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOpleiding, setSelectedOpleiding] = useState('');

  const filteredStudents = studentsData.filter(
    (student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedOpleiding === '' || student.opleiding === selectedOpleiding)
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../../assets/erasmuslogo.png')} style={styles.logo} />
        <Text style={styles.title}>REGISTRATIES</Text>
        <Image source={require('../../../assets/logo3.png')} style={styles.logoRight} />
      </View>

      <TextInput
        style={styles.searchBar}
        placeholder="Zoek een student"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <View style={styles.filterSection}>
        <Text style={styles.label}>Voorkeur :</Text>
        <Picker
          selectedValue={selectedOpleiding}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedOpleiding(itemValue)}
        >
          <Picker.Item label="Selecteer opleiding" value="" />
          {opleidingen.map((opleiding) => (
            <Picker.Item key={opleiding} label={opleiding} value={opleiding} />
          ))}
        </Picker>
      </View>

      <FlatList
        data={filteredStudents}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={[styles.avatar, { backgroundColor: item.color }]} />
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.opleiding}>{item.opleiding}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#e0f7fa' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  logo: { width: 50, height: 50, resizeMode: 'contain' },
  logoRight: { width: 30, height: 30, resizeMode: 'contain' },
  title: { fontSize: 20, fontWeight: 'bold' },

  searchBar: {
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },

  filterSection: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  label: { fontWeight: 'bold', marginRight: 10 },
  picker: { flex: 1, backgroundColor: '#fff', borderRadius: 10 },

  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginVertical: 5,
    alignItems: 'center',
    elevation: 2,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
  },
  name: { fontWeight: 'bold', fontSize: 16 },
  opleiding: { color: '#777' },
});