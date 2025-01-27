import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PeriodTracker from './components/PeriodTracker';
import HealthInsights from './components/HealthInsights';
import { View, Text, StyleSheet } from 'react-native';

const Explore = () => (
  <View style={styles.centeredView}>
    <Text>Explore Page</Text>
  </View>
);

const Chats = () => (
  <View style={styles.centeredView}>
    <Text>Chats Page</Text>
  </View>
);

const Login = () => (
  <View style={styles.centeredView}>
    <Text>Login Page</Text>
  </View>
);

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Today"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Today') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'Insights') {
            iconName = focused ? 'bulb' : 'bulb-outline';
          } else if (route.name === 'Explore') {
            iconName = focused ? 'compass' : 'compass-outline';
          } else if (route.name === 'Chats') {
            iconName = focused ? 'chatbubble' : 'chatbubble-outline';
          } else if (route.name === 'Login') {
            iconName = focused ? 'log-in' : 'log-in-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#ff6666',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Today" component={PeriodTracker} />
      <Tab.Screen name="Insights" component={HealthInsights} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Chats" component={Chats} />
      <Tab.Screen name="Login" component={Login} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeTabNavigator;
