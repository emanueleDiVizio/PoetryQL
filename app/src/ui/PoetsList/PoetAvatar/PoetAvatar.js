//  @ flow
import React from 'react';
import { Image } from 'react-native';

type Author = {
  portrait: string,
};
type Props = {
  author: Author,
};

export default ({ author }: Props) => (
  <Image
    style={{
        height: 100,
        borderRadius: 50,
        width: 100,
      }}
    source={{ uri: author.portrait }}
  />
);
