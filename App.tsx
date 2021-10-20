import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Login } from './components/Login/login';
import { LoginPageProps } from './core/Models/props/loginPageProps';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const loginProps = {
    isUserLoggedIn: true
  } as LoginPageProps;

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        {/* <Navigation colorScheme={colorScheme} /> */}
        <Login {...loginProps}/> 
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
