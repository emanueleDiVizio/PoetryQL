//  @ flow
import React from 'react';
import { FlatList } from 'react-native';
import PoetItem from './PoetItem';

type Props = {
  authors: string[],
};

const renderAuthor = ({ item }) => <PoetItem poet={item} />;

export default (data: Props) => (
  <FlatList data={data.authors} numColumns={2} renderItem={renderAuthor} />
);
