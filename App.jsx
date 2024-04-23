import 'react-native-gesture-handler';
import React, { useState } from 'react';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import UserProfile from './screens/UserProfile';
import Post from './screens/Post';

const Stack = createStackNavigator();
const App = () => {
  const [loggedIn, setLoggedIn] = useState(() => null);

  const loginHandler = (value: any) => {
    setLoggedIn(value);
  };

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="UserProfile" component={UserProfile} />
          <Stack.Screen name="Post" component={Post} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default App;
