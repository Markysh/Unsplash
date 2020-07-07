import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, ScrollView, StyleSheet} from 'react-native';
import {Header, ImageCard} from '../index';
import {getData} from '../../store/data';

export function HomeScreen(props) {
  const {navigation} = props;
  const {imagesWrapper} = styles;
  const dispatch = useDispatch();
  const images = useSelector(state => state.data);
  const imageCards = images.map(image => {
    return (
      <ImageCard
        onPress={() => navigate(image)}
        key={image.id}
        id={image.id}
        userName={image.user.name}
        userImage={image.user.profile_image.medium}
        thumb={image.urls.regular}
      />
    );
  });

  function navigate(image) {
    navigation.navigate('Preview', {image});
  }

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <View>
      <ScrollView style={imagesWrapper}>
        <Header title={'unsplash'} />
        {imageCards}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  imagesWrapper: {
    marginBottom: 20,
  },
});
