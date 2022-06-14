import { StatusBar } from 'expo-status-bar'
import AppLoading from 'expo-app-loading'

import theme from './src/global/styles/theme'
import { ThemeProvider } from 'styled-components'

import {
  useFonts,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold
  } from '@expo-google-fonts/inter'
import { Routes } from './src/routes'

export default function App() {
  const [fontsLoaded] = useFonts({
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading/>
  }

  return (
    <ThemeProvider theme={theme}>
      <Routes/>
      <StatusBar style='light' backgroundColor={theme.colors.background}></StatusBar>
    </ThemeProvider>  
  )
}
