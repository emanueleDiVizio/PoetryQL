//  @ flow

import React from 'react';

import { Image, Dimensions } from 'react-native';
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
  <Image source={{ uri: painting.image }} style={{ width, height }} />
);

export default apolloWrapper(PaintingBackground);
