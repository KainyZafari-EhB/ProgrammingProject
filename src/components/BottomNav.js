import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function BottomNav({ setCurrentScreen, current }) {
  return (
    <View style={styles.navBar}>
      <NavItem icon="home" label="Home" onPress={() => setCurrentScreen('home')} active={current === 'home'} />
      <NavItem icon="calendar" label="Agenda" onPress={() => setCurrentScreen('agenda')} active={current === 'agenda'} />
      <NavItem icon="menu" label="Meer" onPress={() => setCurrentScreen('more')} active={current === 'more'} />
    </View>
  );
}

function NavItem({ icon, label, onPress, active }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <Ionicons name={icon} size={24} color={active ? '#000' : '#555'} />
      <Text style={[styles.label, { color: active ? '#000' : '#555' }]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#A3EEFF',
    paddingVertical: 10,
  },
  item: {
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
  },
});
