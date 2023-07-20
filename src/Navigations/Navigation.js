//Navigations
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import SignUpFile from "../src/Screens/SignUpFile";
import SignUpFile from "../Screens/SignUpFile";
import NextScreen from "../Screens/NextScreen";
import { NavigationContainer } from "@react-navigation/native";
import HomePage from "../Screens/HomePage";
import { createDrawerNavigator } from "@react-navigation/drawer";
import First from '../Screens/First';
import Second from '../Screens/Second';
import Third from '../Screens/Third';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomRoute from "./BottomRoute";
import DrawerRoute from "./DrawerRoute";

// const Bottom = createBottomTabNavigator();
// function BottomRoute(){
//     return(
//         <Bottom.Navigator initialRouteName='First' screenOptions={{headerShown:false}}>
//             <Bottom.Screen name='First' component={First}/>
//             <Bottom.Screen name='Second' component={Second}/>
//             <Bottom.Screen name='Third' component={Third}/>
//         </Bottom.Navigator>
//     )
// }

// const Drawer = createDrawerNavigator();
// function DrawerRoute(){
//     return(
//         <Drawer.Navigator initialRouteName='HomePage'>
//             <Drawer.Screen name="HomePage" component={HomePage}/>
//             <Drawer.Screen name='First' component={BottomRoute}/>
//             <Drawer.Screen name='Second' component={Second}/>
//             <Drawer.Screen name='Third' component={Third}/>
//         </Drawer.Navigator>
//     )
// }


const Stack = createNativeStackNavigator();

export default function Navigation(){
    return (
        <NavigationContainer >
           <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="SignUp" component={SignUpFile} />
            <Stack.Screen name="NextScreen" component={NextScreen}/>
            <Stack.Screen name="HomePage" component={DrawerRoute}/>
           </Stack.Navigator>
        </NavigationContainer>

    )
}