//  @ flow
import React from 'react';
import { Image, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export type Painting = {
  image: string,
  title: string,
  painter: string,
};

type Props = {
  painting: Painting,
};

export default ({ painting }: Props) => (
  <Image source={{ uri: painting.image }} style={{ width, height }} />
);
