import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreenContainer from '../containers/HomeScreenContainer';
import AboutScreenContainer from '../containers/AboutScreenContainer';
import SplashScreenContainer from '../containers/SplashScreenContainer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LoginContainer from '../containers/LoginContainer';

const Stack = createStackNavigator();

function AuthStackScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
       <Stack.Screen name="Login" component={LoginContainer} />
    </Stack.Navigator>
  );
}



// const Tab = createBottomTabNavigator();

// function AppTabsScreen() {
//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       tabBarOptions={{
//         activeTintColor: '#e91e63',
//       }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={HomeScreenContainer}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="home" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="About"
//         component={AboutScreenContainer}
//         options={{
//           tabBarLabel: 'About',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="bell" color={color} size={size} />
//           ),
//         }}
//       />
//       {/* <Tab.Screen
//         name="Profile"
//         component={Profile}
//         options={{
//           tabBarLabel: 'Profile',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="account" color={color} size={size} />
//           ),
//         }}
//       /> */}
//     </Tab.Navigator>
//   );
// }

export default function EnhancedAppContainer() {

    const[isLoading, setIsLoading] = React.useState(true)
    const[user, setUser] = React.useState(null)

    React.useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(!isLoading);
        },500)
    },[]);

  return (
    <NavigationContainer>
        {/* {isLoading ? <SplashScreen /> : user ? <AppTabsScreen /> : <AuthStackScreen /> } */}
        {isLoading ? <SplashScreenContainer /> : <AuthStackScreen /> }
    </NavigationContainer>
  );
}