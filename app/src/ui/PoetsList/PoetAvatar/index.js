//  @ flow
import React from 'react';
import { Image } from 'react-native';

type Props = {
  portrait: string,
  size: number,
};
export default ({ portrait, size }: Props) => (
  <Image
    style={{
      width: size,
      height: size,
      borderRadius: size / 2,
    }}
    source={{ uri: portrait }}
  />
);
