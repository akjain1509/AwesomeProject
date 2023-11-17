import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {Layout, Colors} from '../utilities/constant';
import {useSelector} from 'react-redux';
import {selectUser} from '../Features/auth/authSlice';

const CustomDrawer = () => {
  const {data, favorites} = useSelector(selectUser);
  const Navigations = [
    {
      Label: 'Total Employees',
      count: data.length,
    },
    {
      Label: 'Favourite Employees',
      count: favorites.length,
    },
  ];
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {Navigations.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={item.onPress}
              style={styles.item}>
              <Text style={styles.text}>
                {item.Label} : {item.count}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {padding: '3%'},
  item: {
    backgroundColor: Colors.primary,
    margin: '3%',
    borderRadius: 5,
    padding: '4%',
  },
  text: {
    color: Colors.white,
    fontWeight: '800',
    fontSize: 16,
  },
});
