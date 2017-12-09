//  @ flow
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import PoetAvatar from './PoetAvatar';

type Poet = {
  name: string,
};
type Props = {
  poet: Poet,
  onPoetPress: Function,
};

export default ({ poet: { name }, onPoetPress }: Props) => (
  <View
    style={{
      height: 120,
      width: 120,
    }}
  >
    <TouchableOpacity onPress={() => onPoetPress(name)}>
      <PoetAvatar name={name} />
      <Text style={{ color: 'white' }}>{name}</Text>
    </TouchableOpacity>
  </View>
);
