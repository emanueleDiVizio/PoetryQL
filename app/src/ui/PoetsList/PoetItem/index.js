//  @ flow
import React from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import PoetAvatar from '../PoetAvatar';
import { Poet } from '../types';

const { height, width } = Dimensions.get('window');

type Props = {
  poet: Poet,
  onPoetPress: Function,
};

export default ({ poet: { name, portrait }, onPoetPress }: Props) => (
  <TouchableOpacity onPress={() => onPoetPress(name)}>
    <View
      style={{
        height: height / 5,
        width: width / 2,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <PoetAvatar portrait={portrait} />
      <Text style={{ color: 'white' }}>{name}</Text>
    </View>
  </TouchableOpacity>
);
