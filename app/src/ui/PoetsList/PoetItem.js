//  @ flow
import React from 'react';
import { Text, View } from 'react-native';
import PoetAvatar from './PoetAvatar';

type Poet = {
  name: string,
};
type Props = {
  poet: Poet,
};

export default ({ poet: { name } }: Props) => (
  <View
    style={{
      height: 120,
      width: 120,
    }}
  >
    <PoetAvatar name={name} />
    <Text style={{ color: 'white' }}>{name}</Text>
  </View>
);
