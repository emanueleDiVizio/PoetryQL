//  @ flow
import React from 'react';
import { FlatList, View } from 'react-native';
import PoetItem from './PoetItem';
import { Poet } from './types';
import Styles from './styles';

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
    <View style={Styles.containerView}>
      <FlatList
        style={Styles.list}
        contentContainerStyle={Styles.contentContainer}
        data={data.authors}
        numColumns={2}
        keyExtractor={(index, item) => index}
        renderItem={({ item }) => <PoetItem poet={item} onPoetPress={onPoetPress} />}
        onEndReachedThreshold={1}
        onEndReached={() => fetchMorePoets(data)}
      />
    </View>
  ) : null);
