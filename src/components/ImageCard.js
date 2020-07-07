import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

export const ImageCard = props => {
  const {userName, userImage, thumb, onPress} = props;
  const {thumbImage, name, userImg, userImgHolder, container} = styles;
  return (
    <View style={container}>
      <View style={userImgHolder}>
        <Image style={userImg} source={{uri: userImage}} />
        <Text style={name}>{userName}</Text>
      </View>
      <TouchableOpacity onPress={onPress}>
        <Image style={thumbImage} source={{uri: thumb}} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
  },
  userImgHolder: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 15,
    marginBottom: 15,
  },
  name: {
    marginLeft: 10,
  },
  userImg: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  thumbImage: {
    height: 600,
    width: '100%',
  },
});
