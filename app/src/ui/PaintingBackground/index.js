//  @ flow

import React from 'react';

import { Image, Dimensions, View } from 'react-native';
import apolloWrapper from '../../config/apollo/hoc';

const { height, width } = Dimensions.get('window');

export type Painting = {
  image: string,
  title: string,
  painter: string,
};

type Props = {
  painting: Painting,
};

const PaintingBackground = ({ painting }: Props) => (
  <View>
    <Image source={{ uri: painting.image }} style={{ width, height }} />
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width,
        height,
        backgroundColor: 'black',
        opacity: 0.6,
      }}
    />
  </View>
);

export default apolloWrapper(PaintingBackground);
