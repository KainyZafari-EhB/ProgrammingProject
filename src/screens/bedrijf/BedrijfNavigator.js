import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import AgendaScreen from './AgendaScreen';
import MoreScreen from './MoreScreen';

const Tab = createBottomTabNavigator();

export default function BedrijfNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Agenda" component={AgendaScreen} />
      <Tab.Screen name="Meer" component={MoreScreen} />
    </Tab.Navigator>
  );
}
