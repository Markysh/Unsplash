import React from 'react';
import {Image, ScrollView, View, Text, StyleSheet} from 'react-native';
import {Header} from '../Header';

export const Preview = props => {
  const {
    userImgHolder,
    userImg,
    name,
    thumbImage,
    location,
    description,
  } = styles;
  const {route} = props;
  const {image} = route.params;
  return (
    <ScrollView>
      <Header title={'Unsplash'} />
      <View style={userImgHolder}>
        <Image style={userImg} source={{uri: image.user.profile_image.large}} />
        <Text style={name}>{image.user.name}</Text>
      </View>
      <Image style={thumbImage} source={{uri: image.urls.full}} />
      <Text style={location}>{image.user.location}</Text>
      <Text style={description}>{image.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  userImgHolder: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 15,
    marginBottom: 15,
  },
  userImg: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  name: {
    fontSize: 14,
    marginLeft: 10,
  },
  thumbImage: {
    height: 600,
    width: '100%',
  },
  location: {
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 15,
  },
  description: {
    fontSize: 12,
    textTransform: 'capitalize',
    marginLeft: 15,
    marginTop: 5,
    color: '#767676',
  },
});
