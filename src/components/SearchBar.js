import React from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {searchbarStyle} from '../styles';

const SearchBar = (props) => {
  return (
    <View style={searchbarStyle.container}>
      <Icon name="magnify" size={18} color="black" />
      <TextInput
        style={searchbarStyle.input}
        placeholder="Search a city.."
      />
    </View>
  );
};

export {SearchBar};