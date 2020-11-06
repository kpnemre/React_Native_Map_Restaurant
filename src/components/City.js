import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import { cityStyle } from '../styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const City = (props) => {

  return (
  
    <TouchableOpacity style={cityStyle.container}>
      <Icon name='city' color='gery' size={20}/>
      <Text style={cityStyle.text}>{props.cityName}</Text>
    </TouchableOpacity>
  );
};

export {City};