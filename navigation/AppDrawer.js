import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import EntryScreen from '../screens/EntryScreen';
import PastEntriesScreen from '../screens/PastEntriesScreen';
import MoodInsightsScreen from '../screens/MoodInsightsScreen';

const Drawer = createDrawerNavigator();

export default function AppDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Journal Entry" component={EntryScreen} />
            <Drawer.Screen name="Past Entries" component={PastEntriesScreen} />
            <Drawer.Screen name="Reports" component={MoodInsightsScreen} />
        </Drawer.Navigator>
    );
}
