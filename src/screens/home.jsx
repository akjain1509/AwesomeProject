import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import {Colors, Layout} from '../utilities/constant';
import {selectUser} from '../Features/auth/authSlice';
import {useSelector} from 'react-redux';

const HomeScreen = ({navigation}) => {
  const {data} = useSelector(selectUser);
  console.log(data, 'HomeScreen');

  const renderItem = ({item}) => {
    return (
      <View style={{alignItems: 'center', width: Layout.width, margin: '2%'}}>
        <View
          style={{
            backgroundColor: Colors.white,
            borderRadius: 10,
            elevation: 5,
            shadowColor: Colors.black,
            shadowOffset: {
              width: 5,
              height: 0,
            },
            shadowOpacity: 0.5,
            shadowRadius: 5,
            width: Layout.width * 0.8,
            justifyContent: 'center',
            padding: '2%',
          }}>
          <Text
            style={{
              color: Colors.black,
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            {item.first_name} {item.last_name}
          </Text>
          <Text>{item.jobTitle}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: Colors.white}}>
      <View
        style={{
          flex: 0.1,
          backgroundColor: Colors.primary,
          padding: '3%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          style={{
            borderRadius: 25,
            borderColor: Colors.white,
            height: Layout.height * 0.05,
            width: Layout.height * 0.05,
            backgroundColor: Colors.white,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>+</Text>
        </TouchableOpacity>
        <Text style={{color: Colors.white}}>Inbox</Text>
        <TouchableOpacity
          style={{
            borderRadius: 25,
            borderColor: Colors.white,
            height: Layout.height * 0.05,
            width: Layout.height * 0.05,
            backgroundColor: Colors.white,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {/* <Image
            source={profile}
            resizeMode="contain"
            style={styles.profile_logo}
          /> */}
          <Text>+</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <TouchableOpacity
        style={{
          width: Layout.width * 0.7,
          height: Layout.height * 0.1,
          borderRadius: 5,
          backgroundColor: Colors.primary,
          justifyContent: 'center',
        }}
        onPress={() => navigation.navigate('Home')}>
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
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
