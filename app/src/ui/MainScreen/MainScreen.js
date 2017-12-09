import React from 'react';
import { View, Dimensions, ToastAndroid } from 'react-native';

import PaintingBackgroundView, { Painting } from '../PaintingBackground';
import PoetsList from '../PoetsList';

const { height, width } = Dimensions.get('window');

type Props = {
  painting: Painting,
};

const MainScreen = ({ painting }: Props) => (
  <View>
    <PaintingBackgroundView painting={painting} />
    <View
      style={{
        position: 'absolute',
        top: 64,
        left: 0,
        width,
        height,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <PoetsList onPoetPress={name => ToastAndroid.show(name)} />
    </View>
  </View>
);

export default MainScreen;
