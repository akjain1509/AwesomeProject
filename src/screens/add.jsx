import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Layout, Colors} from '../utilities/constant';

const AddItem = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Colors.white,
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={{
          width: Layout.width * 0.7,
          height: Layout.height * 0.1,
          borderRadius: 5,
          backgroundColor: Colors.primary,
          justifyContent: 'center',
        }}
        onPress={() => navigation.navigate('AddEmployee')}>
        <Text
          style={{
            color: Colors.white,
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 18,
          }}>
          Add
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddItem;

const styles = StyleSheet.create({});
