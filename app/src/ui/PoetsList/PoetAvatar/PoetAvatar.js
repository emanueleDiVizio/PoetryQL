//  @ flow
import React from 'react';
import { Image } from 'react-native';

type Portrait = {
  image: string,
};

type Data = {
  portrait: Portrait,
};

type Props = {
  data: Data,
  size: number,
};
export default ({ data, size }: Props) => (
  <Image
    style={{
      width: size,
      height: size,
      borderRadius: size / 2,
    }}
    source={{ uri: data.loading ? '' : data.author.portrait.image }}
  />
);
