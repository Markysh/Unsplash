import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Header = props => {
  const {viewStyle, textStyle} = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    backgroundColor: '#eaeaea',
  },
  textStyle: {
    paddingTop: 15,
    paddingBottom: 15,
    fontSize: 18,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
