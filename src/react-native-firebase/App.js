import React, { useState } from 'react';
import { LoginScreen, HomeScreen, SignupScreen, SplashScreen } from './screens';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const Stack = createStackNavigator();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  if (loading) {
    return <SplashScreen />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {user ? (
            <Stack.Screen name='Home'>
              {(props) => <HomeScreen {...props} extraData={user} />}
            </Stack.Screen>
          ) : (
            <>
              <Stack.Screen name='Login' component={LoginScreen} />
              <Stack.Screen name='Signup' component={SignupScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
