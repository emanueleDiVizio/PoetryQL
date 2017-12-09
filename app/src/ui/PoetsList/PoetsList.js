//  @ flow
import React from 'react';
import { FlatList } from 'react-native';
import PoetItem from './PoetItem';
import { Poet } from './types';

type Props = {
  authors: Poet[],
  onPoetPress: Function,
  show: boolean,
};

export default ({ authors, onPoetPress, show }: Props) =>
  (show ? (
    <FlatList
      style={{ marginTop: 24 }}
      data={authors}
      numColumns={2}
      renderItem={({ item }) => <PoetItem poet={item} onPoetPress={onPoetPress} />}
    />
  ) : null);
