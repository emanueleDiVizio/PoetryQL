//  @ flow
import React from 'react';
import { FlatList } from 'react-native';
import PoetItem from './PoetItem';

type Props = {
  authors: string[],
  onPoetPress: Function,
};

export default (props: Props) => (
  <FlatList
    data={props.authors}
    numColumns={2}
    renderItem={({ item }) => <PoetItem poet={item} onPoetPress={props.onPoetPress} />}
  />
);
