import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import HomePage from '../Screens/HomePage';
import BottomRoute from './BottomRoute';
import Second from '../Screens/Second';
import Third from '../Screens/Third';

const Drawer = createDrawerNavigator();

export default function DrawerRoute() {
  return (
    <Drawer.Navigator initialRouteName='HomePage'>
    <Drawer.Screen name="HomePage" component={HomePage}/>
    <Drawer.Screen name='First' component={BottomRoute}/>
    <Drawer.Screen name='Second' component={Second}/>
    <Drawer.Screen name='Third' component={Third}/>
    </Drawer.Navigator>
  )
}
