import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Provider} from 'react-redux';
import {HomeScreen} from './src/components/view/HomeScreen';
import {Preview} from './src/components/view/Preview';
import {store} from './src/store';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Homepage">
          <Stack.Screen name="Homepage" component={HomeScreen} />
          <Stack.Screen name="Preview" component={Preview} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
