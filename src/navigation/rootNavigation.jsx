import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {selectUser} from '../Features/auth/authSlice';
import {useSelector} from 'react-redux';
import AddEmployee from '../screens/addEmployee';
import AddItem from '../screens/add';
import DrawerNavigation from './drawerNavigation';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  const {data} = useSelector(selectUser);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={data.length === 0 ? 'Add' : 'Drawer'}>
        <Stack.Screen name="Add" component={AddItem} />
        <Stack.Screen name="AddEmployee" component={AddEmployee} />
        <Stack.Screen name="Drawer" component={DrawerNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
