//  @ flow
import React from 'react';
import { FlatList, View, Dimensions } from 'react-native';
import PoetItem from './PoetItem';
import { Poet } from './types';

const { height, width } = Dimensions.get('window');

type Props = {
  authors: Poet[],
  onPoetPress: Function,
  show: boolean,
};

export default ({ authors, onPoetPress, show }: Props) =>
  (show ? (
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width,
        height,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <FlatList
        style={{ marginTop: 24 }}
        data={authors}
        numColumns={2}
        renderItem={({ item }) => <PoetItem poet={item} onPoetPress={onPoetPress} />}
      />
    </View>
  ) : null);
