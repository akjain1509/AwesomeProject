import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import AddEmployee from '../screens/addEmployee';
import HomeScreen from '../screens/home';
import {setData, selectUser} from '../Features/auth/authSlice';
import {useSelector, useDispatch} from 'react-redux';
import AddItem from '../screens/add';

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

const RootNavigation = () => {
  const {data} = useSelector(selectUser);
  console.log(data.length);
  return (
    <NavigationContainer>
      {/* {data.length === 0 ? (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Add" component={AddItem} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      ) : (
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="List" component={List} />
        </Drawer.Navigator>
      )} */}
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={data.length < 0 ? 'Add' : 'Home'}>
        <Stack.Screen name="Add" component={AddItem} />
        <Stack.Screen name="AddEmployee" component={AddEmployee} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
