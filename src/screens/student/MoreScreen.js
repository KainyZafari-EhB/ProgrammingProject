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
import { useNavigation } from '@react-navigation/native';




export default function MoreScreen() {
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate('RoleSelectScreen');
  };
  
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../../../assets/erasmus_logo.png')} style={styles.logo} />
        <View style={styles.profileCircle}><Text style={styles.profileText}>F</Text></View>
      </View>
      
      <View style={styles.whiteBox}>
      <View style={styles.headerInfo}>
        <Text style={styles.name}>Ilyas Fariss</Text>
        <Text style={styles.email}>Ilyas.Fariss@student.ehb.be</Text>
      </View>

      <TouchableOpacity style={styles.menuItem} onPress={handleNavigate}>
        <Text style={styles.menuText}>Mijn favorieten</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={handleNavigate}>
        <Text style={styles.menuText}>Afspraken</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={handleNavigate}>
        <Text style={styles.menuText}>Uitloggen</Text>
      </TouchableOpacity>

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
  whiteBox:{
    flex:1,
    backgroundColor:'#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 30,
    paddingTop: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#003d29',
  },
  email: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  menuItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#E1E1E1',
    paddingVertical: 20,
  },
  menuText: {
    fontSize: 16,
    color: '#444',
  },
  headerInfo:{
    
  }
});