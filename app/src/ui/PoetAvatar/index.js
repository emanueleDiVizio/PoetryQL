//  @ flow
import React from 'react';
import { Image } from 'react-native';

type Props = {
  portrait: string,
};
export default ({ portrait }: Props) => (
  <Image
    style={{
      height: 100,
      borderRadius: 50,
      width: 100,
    }}
    source={{ uri: portrait }}
  />
);
