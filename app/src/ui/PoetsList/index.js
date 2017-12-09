//  @ flow
import React from 'react';
import { FlatList } from 'react-native';
import PoetItem from '../PoetItem';
import apolloWrapper from '../../config/apollo/hoc';

type Props = {
  authors: string[],
  onPoetPress: Function,
};

const PoetsList = ({ authors, onPoetPress }: Props) => (
  <FlatList
    style={{ marginTop: 24 }}
    data={authors}
    numColumns={2}
    renderItem={({ item }) => <PoetItem poet={item} onPoetPress={onPoetPress} />}
  />
);

export default apolloWrapper(PoetsList);
