import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import PeriodTracker from './src/components/PeriodTracker';
import HealthInsights from './src/components/HealthInsights';
import AuthScreen from './src/components/AuthScreen';
// import PeriodTracker from './src/PeriodTracker';
import HomeTabNavigator from './src/Hometabnavigator';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
      <NavigationContainer>
        <PeriodTracker/>
        {/* <HomeTabNavigator /> */}
        
      </NavigationContainer>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
