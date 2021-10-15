import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Jobs from '../pages/Jobs';
import JobDetail from '../pages/JobDetail'
const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Jobs"
        component={Jobs}
        options={{title: 'Jobs', headerTintColor: 'red'}}
      />
      <Stack.Screen
        name="JobDetail"
        component={JobDetail}
        options={({route}) => ({
          title: route.params.name,
          headerTintColor: 'red',
        })}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;