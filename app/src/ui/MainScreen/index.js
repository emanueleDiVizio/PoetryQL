import React from 'react';
import { View, Dimensions } from 'react-native';

import PaintingBackgroundView from '../PaintingBackground';
import PoetsList from '../PoetsList';

const { height, width } = Dimensions.get('window');

const MainScreen = () => (
  <View>
    <PaintingBackgroundView />
    <View
      style={{
        position: 'absolute',
        top: 64,
        left: 0,
        width,
        height,
        alignItems: 'center',
      }}
    >
      <PoetsList />
    </View>
  </View>
);

export default MainScreen;
