import React, { useState, useEffect } from 'react'; 
import { View, StyleSheet } from 'react-native';
import RoleSelectScreen from './src/screens/RoleSelectScreen';
import { NavigationContainer } from '@react-navigation/native';


import { db } from './firebase'; 
import { doc, setDoc } from 'firebase/firestore';

import BottomNav from './src/components/BottomNav';



// Importeer schermen per rol
import StudentHome from './src/screens/student/HomeScreen';
import StudentAgenda from './src/screens/student/AgendaScreen';
import StudentMore from './src/screens/student/MoreScreen';
import StudentNavigator from './src/screens/student/StudentNavigator';


import BedrijfHome from './src/screens/bedrijf/HomeScreen';
import BedrijfAgenda from './src/screens/bedrijf/AgendaScreen';
import BedrijfMore from './src/screens/bedrijf/MoreScreen';
import BedrijfNavigator from './src/screens/bedrijf/BedrijfNavigator';

import AdminHome from './src/screens/admin/HomeScreen';





export default function App() {
  const [role, setRole] = useState(null);
  
  // Test Firestore verbinding
  // Deze useEffect wordt uitgevoerd bij het laden van de app
  async function testFirestore() {
    try {
      await setDoc(doc(db, 'testen', 'init'), {
        message: 'Firestore verbonden 🎉',
        timestamp: new Date().toISOString()
      });
      console.log('✅ Firestore werkt!');
    } catch (err) {
      console.error('❌ Firestore fout:', err);
    }
  }
// Gebruik useEffect om Firestore te testen bij het laden van de app
  useEffect(() => {
    testFirestore();
  }, []);

  let content;

  if (!role) {
    content = <RoleSelectScreen onSelect={setRole} />;
  } else if (role === 'student') {
    content = <StudentNavigator />;
  } else if (role === 'bedrijf') {
    content = <BedrijfNavigator />;
  } else if (role === 'admin') {
    content = <AdminHome />;
  }

  return <NavigationContainer>{content}</NavigationContainer>;
}
