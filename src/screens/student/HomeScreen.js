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
  { id: 13, logo: require('../../../assets/logo1.png') },
  { id: 14, logo: require('../../../assets/logo2.png') },
  { id: 15, logo: require('../../../assets/logo3.png') },
  { id: 16, logo: require('../../../assets/logo4.png') },
  { id: 17, logo: require('../../../assets/logo5.png') },
  { id: 18, logo: require('../../../assets/logo6.png') },
  { id: 19, logo: require('../../../assets/logo7.png') },
  { id: 20, logo: require('../../../assets/logo8.png') },
  { id: 21, logo: require('../../../assets/logo9.png') },
  { id: 22, logo: require('../../../assets/logo10.png') },
  { id: 23, logo: require('../../../assets/logo11.png') },
  { id: 24, logo: require('../../../assets/logo12.png') },
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
        <Image source={require('../../../assets/search-symbool.png')} />
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
    paddingTop:0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical:40
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
    marginRight:10,
  },
  profileText: {
    color: '#A3EEFF',
    fontSize:24
  },
  searchContainer: {
    flexDirection:'row',
    alignItems: 'center',
    marginHorizontal: 65,
    marginTop: 30,
    marginBottom:10,
    backgroundColor: '#E1E1E1',
    borderRadius: 15,
    elevation: 5,
    paddingHorizontal: 15,
    paddingVertical: 5,

  },
  searchInput: {
    marginLeft:10,
    fontWeight: '900',
    fontSize: 14,
    color: '#999999',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingTop: 0,
    paddingBottom: 100,
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
    paddingTop: 20,
    paddingBottom:120
  }
});