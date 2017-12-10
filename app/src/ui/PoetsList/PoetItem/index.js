//  @ flow
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import PoetAvatar from '../PoetAvatar';
import { Poet } from '../types';
import Styles from './styles';

type Props = {
  poet: Poet,
  size: number,
  onPoetPress: Function,
};

export default ({ poet: { name, portrait }, onPoetPress, size }: Props) => (
  <TouchableOpacity onPress={() => onPoetPress(name)}>
    <View style={[Styles.containerView, { height: size * 1.5 }]}>
      <PoetAvatar portrait={portrait} size={size} />
      <Text style={Styles.text}>{name}</Text>
    </View>
  </TouchableOpacity>
);
