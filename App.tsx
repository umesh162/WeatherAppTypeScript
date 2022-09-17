import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import store from './src/redux/store';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Country from './src/Country';
import Weather from './src/Weather';
import Home from './src/Home';

export type RootStackParams = {
  Home: any;
  Country: any;
  Weather: any;
};

const RootStack = createNativeStackNavigator<RootStackParams>();

const App = () => {
  return (
    <NavigationContainer>
      <ReduxProvider store={store}>
        <RootStack.Navigator initialRouteName="Home">
          <RootStack.Screen name="Home" component={Home} />
          <RootStack.Screen name="Country" component={Country} />
          <RootStack.Screen name="Weather" component={Weather} />
        </RootStack.Navigator>
      </ReduxProvider>
    </NavigationContainer>
  );
};

export default App;
