import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const students = [
  { id: 1, name: 'Ilyas Fariss', opleiding: 'Toegepaste Informatica', color: '#99e0a3' },
  { id: 2, name: 'Hana Amrani', opleiding: 'Toegepaste Informatica', color: '#e69eb0' },
  { id: 3, name: 'Adam Akkay', opleiding: 'Multimedia en Creatieve technologie', color: '#9bc6e9' },
  { id: 4, name: 'Adam Jaidi', opleiding: 'Toegepaste Informatica', color: '#b5e383' },
];

const opleidingen = [
  'Toegepaste Informatica',
  'Multimedia en Creatieve technologie',
  'Graduaat Programmeren',
  'Graduaat Systeem- en Netwerkbeheer',
];

export default function HomeScreen() {
  const [selectedOpleiding, setSelectedOpleiding] = useState('Toegepaste Informatica');
  const [zoekterm, setZoekterm] = useState('');

  const filteredStudents = students.filter(
    (s) =>
      s.opleiding === selectedOpleiding &&
      s.name.toLowerCase().includes(zoekterm.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('../../../assets/erasmus_logo.png')}
          style={styles.logo}
        />
        <Text style={styles.headerTitle}>REGISTRATIES</Text>
        <Image
          source={require('../../../assets/logo3.png')}
          style={styles.dLogo}
        />
      </View>

      {/* Zoeken en Filter */}
      <View style={styles.whiteBox}>
        

        <View style={styles.filterContainer}>
          <Text style={styles.label}>Voorkeur :</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={selectedOpleiding}
              onValueChange={(itemValue) => setSelectedOpleiding(itemValue)}
              style={styles.picker}
            >
              {opleidingen.map((opleiding) => (
                <Picker.Item label={opleiding} value={opleiding} key={opleiding} />
              ))}
            </Picker>
          </View>
        </View>

        {/* Studentenlijst */}
        <FlatList
          data={filteredStudents}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.studentList}
          renderItem={({ item }) => (
            <TouchableOpacity style={[styles.card, { borderLeftColor: item.color }]}>
              <View style={[styles.avatar, { backgroundColor: item.color }]} />
              <View>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.opleiding}>{item.opleiding}</Text>
              </View>
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
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#A3EEFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 55,
    height: 55,
    resizeMode: 'contain',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  dLogo: {
    width: 55,
    height: 55,
    resizeMode: 'contain',
  },
  whiteBox: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 10,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 20,
    paddingTop: 30,
  },

  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    marginRight: 10,
    fontWeight: 'bold',
  },
  pickerWrapper: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    overflow: 'hidden',
  },
  picker: {
    height: 40,
    width: '100%',
  },
  studentList: {
    paddingBottom: 80,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderLeftWidth: 6,
    elevation: 2,
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 20,
    marginRight: 15,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  opleiding: {
    fontSize: 13,
    color: '#666',
  },
});
