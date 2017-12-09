import React from 'react';
import { View, Dimensions } from 'react-native';

import PaintingBackgroundView, { Painting } from '../PaintingBackground';
import PoetsList from '../PoetsList';

const { height, width } = Dimensions.get('window');

type Props = {
  painting: Painting,
};

const MainScreen = ({ painting, poets }: Props) => (
  <View>
    <PaintingBackgroundView data={painting} />
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width,
        height,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <PoetsList data={poets} onPoetPress={name => alert(name)} />
    </View>
  </View>
);

export default MainScreen;
