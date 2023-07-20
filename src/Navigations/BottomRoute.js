import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import First from '../Screens/First';
import Second from '../Screens/Second';
import Third from '../Screens/Third';
import Icon from 'react-native-vector-icons/MaterialIcons';
const Bottom = createBottomTabNavigator();

export default function BottomRoute() {
  return (
    <Bottom.Navigator initialRouteName='First' screenOptions={{headerShown:false}}>
    <Bottom.Screen name='First' component={First}
    options={{
      tabBarIcon: () => (
        <Icon name="airplay" size={20} />
      ),
    }}/>
    <Bottom.Screen name='Second' component={Second} options={{
        tabBarIcon: () => (
          <Icon name="add-call" size={20} />
        ),
      }}/>
    <Bottom.Screen name='Third' component={Third} options={{
        tabBarIcon: () => (
          <Icon name="help" size={20} />
        ),
      }}/>
</Bottom.Navigator>
  )
}
