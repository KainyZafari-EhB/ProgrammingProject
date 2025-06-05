import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import RoleSelectScreen from './screens/RoleSelectScreen';
import { NavigationContainer } from '@react-navigation/native';

import BottomNav from './components/BottomNav';

// Importeer schermen per rol
import StudentHome from './screens/student/HomeScreen';
import StudentAgenda from './screens/student/AgendaScreen';
import StudentMore from './screens/student/MoreScreen';
import StudentNavigator from './screens/student/StudentNavigator';


import BedrijfHome from './screens/bedrijf/HomeScreen';
import BedrijfAgenda from './screens/bedrijf/AgendaScreen';
import BedrijfMore from './screens/bedrijf/MoreScreen';
import BedrijfNavigator from './screens/bedrijf/BedrijfNavigator';

import AdminHome from './screens/admin/HomeScreen';


export default function App() {
  const [role, setRole] = useState(null);

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
