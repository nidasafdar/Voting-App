// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './AppScreens/MainScreen';
import UserScreen from './AppScreens/UserProfile';
import CandidateScreen from './AppScreens/CandidateScreen';
import AppSettings from './AppScreens/AppSettings';
import Bio from './AppScreens/Bio';
import SigninScreen from './AppScreens/SigninScreen';
import LoginScreen from './AppScreens/LoginScreen';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'; // Imported for Candidate screen

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Bottom Tab Navigator for the main screens
const BottomNav = () => (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#4A90E2',
      tabBarInactiveTintColor: '#E0E0E0',
    }}
  >
    <Tab.Screen
      name="Home" // Added name prop
      component={MainScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Entypo name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="User"
      component={UserScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="user" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Candidate"
      component={CandidateScreen}
      options={{ // Changed "option" to "options"
        tabBarIcon: ({ color, size }) => (
          <FontAwesome5 name="user-check" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Setting"
      component={AppSettings}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Feather name="settings" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Bio"
      component={Bio}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="bio" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

// Stack Navigator that uses the BottomTab as the initial screen
const AppStack = () => (
  <Stack.Navigator initialRouteName="BottomNav" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="BottomNav" component={BottomNav} />
    <Stack.Screen name="SigninScreen" component={SigninScreen} />
    <Stack.Screen name="LoginScreen" component={LoginScreen} />
  </Stack.Navigator>
);

const App = () => (
  <NavigationContainer>
    <AppStack />
  </NavigationContainer>
);

export default App;
