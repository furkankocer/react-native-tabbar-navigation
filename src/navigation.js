import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

//Screens
import homeScreen from './screens/homeScreen';
import settingsScreen from './screens/settingsScreen';
import detailsScreen from './screens/detailsScreen';

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();

function HomeStackNavigation() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={homeScreen} />
      <HomeStack.Screen name="Details" component={detailsScreen} />
    </HomeStack.Navigator>
  );
}
function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackNavigation} />
        <Tab.Screen name="Settings" component={settingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
