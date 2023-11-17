import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {Colors, Layout} from '../utilities/constant';
import {selectUser, toggleFavorite} from '../Features/auth/authSlice';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({navigation}) => {
  const {data, favorites} = useSelector(selectUser);

  const dispatch = useDispatch();

  const handleFavoriteToggle = index => {
    dispatch(toggleFavorite(index));
  };

  console.log(data, 'losi');

  const renderItem = ({item, index}) => {
    const isFavorite = favorites.includes(index);
    const getInitialLetter = name => {
      return name ? name.charAt(0).toUpperCase() : '';
    };
    return (
      <View style={styles.itemView}>
        <View style={styles.nameIcon}>
          <Text style={styles.letter}>{getInitialLetter(item.first_name)}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.itemText}>
            {item.first_name}
            {item.last_name}
          </Text>
          <Text style={{fontSize: 14}}>{item.jobTitle}</Text>
        </View>
        <TouchableOpacity onPress={() => handleFavoriteToggle(index)}>
          <Icon
            name={isFavorite ? 'star' : 'star-o'}
            size={30}
            color={isFavorite ? '#ffdf00' : Colors.black}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            source={require('../assets/menu.png')}
            resizeMode="contain"
            style={{height: Layout.height * 0.1}}
          />
        </TouchableOpacity>
        <Text style={styles.heading}>INBOX</Text>
        <TouchableOpacity onPress={() => navigation.navigate('AddEmployee')}>
          <Image
            source={require('../assets/add.png')}
            resizeMode="contain"
            style={{height: Layout.height * 0.05}}
          />
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
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'space-between',
  },
  header: {
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '5%',
  },
  heading: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 18,
    textTransform: 'uppercase',
  },
  itemView: {
    margin: '3%',
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
    padding: '4%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  nameIcon: {
    backgroundColor: Colors.primary,
    width: 40,
    height: 40,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  letter: {color: Colors.white, fontSize: 16},
  details: {
    flexDirection: 'column',
    flex: 1,
    padding: '2%',
  },
  itemText: {
    color: Colors.black,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
