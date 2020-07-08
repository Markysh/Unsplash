import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

export const Header = props => {
  const {viewStyle, icon, textStyle} = styles;
  return (
    <View style={viewStyle}>
      <Image style={icon} source={require('./icon.png')} />
      <Text style={textStyle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: '#aeaeae',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  textStyle: {
    paddingTop: 15,
    paddingBottom: 15,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
