//  @ flow
import React from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import PoetAvatar from '../PoetAvatar';
import { Poet } from '../types';
import Styles from './styles';

const { height, width } = Dimensions.get('window');

const size = height / 5;

type Props = {
  poet: Poet,
  onPoetPress: Function,
};

export default ({ poet: { name, portrait }, onPoetPress }: Props) => (
  <TouchableOpacity onPress={() => onPoetPress(name)}>
    <View style={[Styles.containerView, { width: width / 2, height: size }]}>
      <PoetAvatar portrait={portrait} size={120} />
      <Text style={Styles.text}>{name}</Text>
    </View>
  </TouchableOpacity>
);
