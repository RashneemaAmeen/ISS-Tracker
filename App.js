import 'react-native-gesture-handler';
//import * as React from 'react';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/Home';
import IssLocationScreen from './screens/IssLocation';
import MeteorScreen from './screens/Meteors';

//CLASS 1 T.A C76 
/*
export default class App extends Component{
  render(){
    return(
      <View style = {styles.container}>
       <IssLocationScreen/>
      </View>
    )
  }
}
*/



//CLASS 1 S.A C76
const Stack = createStackNavigator();






export default class App extends Component {
  render(){
    return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="IssLocation" component={IssLocationScreen} />
      <Stack.Screen name="Meteors" component={MeteorScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
