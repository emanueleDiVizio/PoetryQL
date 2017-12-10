//  @ flow

import React from 'react';

import { Image, View, Platform } from 'react-native';
import { BlurView } from 'expo';
import Styles from './styles';

export type Painting = {
  image: string,
  title: string,
  painter: string,
};

type Data = {
  painting: Painting,
};

type Props = {
  data: Data,
};

const PaintingBackground = ({ data: { painting } }: Props) => (
  <View>
    <Image source={{ uri: painting.image }} style={Styles.image} />
    <BlurView tint="dark" intensity={Platform.OS === 'ios' ? 80 : 100} style={Styles.blurView} />
  </View>
);

export default PaintingBackground;
