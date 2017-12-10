//  @ flow
import React from 'react';
import { Image } from 'react-native';

const placeholderUrl =
  'https://cdn.vectorstock.com/i/thumb-large/70/71/mustache-icon-vector-10787071.jpg';

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
    source={{
      uri: data.loading ? placeholderUrl : data.author.portrait.image,
    }}
  />
);
