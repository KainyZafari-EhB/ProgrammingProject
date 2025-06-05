import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
const companies = [
  { id: 1, logo: require('../../../assets/logo1.png') },
  { id: 2, logo: require('../../../assets/logo2.png') },
  { id: 3, logo: require('../../../assets/logo3.png') },
  { id: 4, logo: require('../../../assets/logo4.png') },
  { id: 5, logo: require('../../../assets/logo5.png') },
  { id: 6, logo: require('../../../assets/logo6.png') },
  { id: 7, logo: require('../../../assets/logo7.png') },
  { id: 8, logo: require('../../../assets/logo8.png') },
  { id: 9, logo: require('../../../assets/logo9.png') },
  { id: 10, logo: require('../../../assets/logo10.png') },
  { id: 11, logo: require('../../../assets/logo11.png') },
  { id: 12, logo: require('../../../assets/logo12.png') },
];

const screenWidth = Dimensions.get('window').width;
const cardSize = (screenWidth - 60) / 3; // 3 cards per row + spacing

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../../../assets/erasmus_logo.png')} style={styles.logo} />
        <View style={styles.profileCircle}><Text style={styles.profileText}>F</Text></View>
      </View>
      
      <View style={styles.whiteBox}>
          {/* Zoekbalk */}
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Zoek een bedrijf"
            placeholderTextColor="#aaa"
            style={styles.searchInput}
          />
        </View>

        {/* Bedrijven */}
        <ScrollView contentContainerStyle={styles.grid}>
          {companies.map((company) => (
            <TouchableOpacity key={company.id} style={styles.companyBox}>
              <Image source={company.logo} style={styles.companyLogo} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A3EEFF', // bleu clair
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 120,
    height: 30,
    resizeMode: 'contain',
  },
  profileCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileText: {
    fontWeight: 'bold',
    color: '#333',
  },
  searchContainer: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    elevation: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  searchInput: {
    fontSize: 16,
    color: '#333',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 40,
  },
  companyBox: {
    width: cardSize,
    height: cardSize,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  companyLogo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  whiteBox:{
    backgroundColor:'#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingVertical: 20,

  }
});