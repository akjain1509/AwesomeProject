import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import {Layout, Colors} from '../utilities/constant';

const AddItem = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.root}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('AddEmployee')}>
          <Text style={styles.text}>Add</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddItem;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.white,
    alignItems: 'center',
  },
  btn: {
    width: Layout.width * 0.7,
    height: Layout.height * 0.1,
    borderRadius: 5,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
  },
  text: {
    color: Colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
