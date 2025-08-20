import { Stack } from 'expo-router'

const RootLayout = () => {
  return (
    <Stack screenOptions={{headerShown:false}} initialRouteName='index'> 
        <Stack.Screen name='index' />
        <Stack.Screen name='home' />
        <Stack.Screen name='coin' />
    </Stack>
  )
}

export default RootLayout