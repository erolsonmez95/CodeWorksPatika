import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity,View} from 'react-native';
import styles from './Button.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const Button = ({text, onPress, iconName, loading}) => {
  return (
    <TouchableOpacity
      disabled={loading}
      onPress={onPress}
      style={styles.container}>
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <View style={{flexDirection:'row'}}>
        <Icon name={iconName} size={25} color="white" />
        <Text style={styles.title}> {text}</Text>
          
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;
