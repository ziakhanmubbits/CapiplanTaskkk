// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Dashboard from '../../screens/appFlow/dashboard';
// import Reports from '../../screens/appFlow/reports';
// import Notifications from '../../screens/appFlow/notification';

// const Tab = createBottomTabNavigator();

// export default function TabNavigator() {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false, // 👈 remove header completely
//       }}
//     >
//       <Tab.Screen name="Home" component={Dashboard} />
//       <Tab.Screen name="Reports" component={Reports} />
//       <Tab.Screen name="Notifications" component={Notifications} />
//     </Tab.Navigator>
//   );
// }

// navigation/TabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTabBar from './CustomeTabBar';
import Reports from '../../screens/appFlow/reports';
import Dashboard from '../../screens/appFlow/dashboard';
import Notifications from '../../screens/appFlow/notification';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
    initialRouteName="Dashboard"
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Reports" component={Reports} />
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Notifications" component={Notifications} />
    </Tab.Navigator>
  );
}
