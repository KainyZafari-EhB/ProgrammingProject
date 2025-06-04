import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import AgendaScreen from './screens/AgendaScreen';
import MoreScreen from './screens/MoreScreen';
import BottomNav from './components/BottomNav';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');

  let ScreenComponent;
  if (currentScreen === 'agenda') ScreenComponent = AgendaScreen;
  else if (currentScreen === 'more') ScreenComponent = MoreScreen;
  else ScreenComponent = HomeScreen;

  return (
    <View style={styles.container}>
      <ScreenComponent />
      <BottomNav setCurrentScreen={setCurrentScreen} current={currentScreen} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
