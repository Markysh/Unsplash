import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import {Header} from '../Header';

export const Preview = props => {
  const {route} = props;
  const {image} = route.params;
  return (
    <View>
      <Header title={'unsplash'} />
      <View style={styles.userImgHolder}>
        <Image
          style={styles.userImg}
          source={{uri: image.user.profile_image.large}}
        />
        <Text style={styles.text}>{image.user.name}</Text>
      </View>
      <Image style={styles.thumbImage} source={{uri: image.urls.full}} />
    </View>
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
  text: {
    marginLeft: 10,
  },
  thumbImage: {
    height: 600,
    width: '100%',
  },
});
