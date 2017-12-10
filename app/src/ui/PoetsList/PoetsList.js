//  @ flow
import React from 'react';
import { FlatList, View, Dimensions } from 'react-native';
import PoetItem from './PoetItem';
import { Poet } from './types';

const { height, width } = Dimensions.get('window');

type Data = {
  authors: Poet[],
};

type Props = {
  data: Data,
  onPoetPress: Function,
  show: boolean,
};

const fetchMorePoets = (data) => {
  data.fetchMore({
    variables: { offset: data.authors.length + 1 },
    updateQuery: (previousResult, { fetchMoreResult }) => {
      if (!fetchMoreResult || fetchMoreResult.authors.length === 0) {
        return previousResult;
      }
      return {
        authors: previousResult.authors.concat(fetchMoreResult.authors),
      };
    },
  });
};

export default ({ data, onPoetPress, show }: Props) =>
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
        data={data.authors}
        numColumns={2}
        keyExtractor={(index, item) => index}
        renderItem={({ item }) => <PoetItem poet={item} onPoetPress={onPoetPress} />}
        onEndReachedThreshold={0.5}
        onEndReached={() => fetchMorePoets(data)}
      />
    </View>
  ) : null);
