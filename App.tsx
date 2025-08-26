/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import "./global.css"
 
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { QueryClientProvider,QueryClient } from '@tanstack/react-query';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Tabs } from './src/Navigation/Navigation';
import MovieDetails from './src/Screens/MovieDetails';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const queryClient = new QueryClient();
  const RootStack = createStackNavigator();

  return (
    <SafeAreaProvider>
    <QueryClientProvider client={queryClient}>
    <NavigationContainer>
    <RootStack.Navigator
          initialRouteName="index"
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontSize: 25,
            },
          }}>
     <RootStack.Screen name="HomeTabs" component={Tabs} options={{headerShown:false}}/>
     <RootStack.Screen name="movieDetails" component={MovieDetails} options={{headerShown:false}}/>
     </RootStack.Navigator>
     </NavigationContainer>
     </QueryClientProvider>
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <NewAppScreen
        templateFileName="App.tsx"
        safeAreaInsets={safeAreaInsets}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
