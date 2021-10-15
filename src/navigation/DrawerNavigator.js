import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import FavoritedJobs from '../pages/FavoriteJobs';
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: 'red',
        
      }}>
      <Drawer.Screen
        name="StackNavigator"
        component={StackNavigator}
        options={{
          headerShown: false,
          title: 'Jobs',
        }}
      />
      <Drawer.Screen
        name="FavoritedJobsPage"
        component={FavoritedJobs}
        options={{title: 'Favorited Jobs', headerTintColor: 'red'}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;