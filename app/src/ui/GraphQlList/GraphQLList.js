//  @ flow
import React from 'react';
import { FlatList } from 'react-native';

type Query = {};

type Props = {
  query: Query,
  dataID: string,
  renderItem: Function,
  paginated: boolean
};

const fetchMoreData = (query, dataID) => {
  query.fetchMore({
    variables: { offset: query[dataID].length + 1 },
    updateQuery: (previousResult, { fetchMoreResult }) => {
      if (!fetchMoreResult || fetchMoreResult[dataID].length === 0) {
        return previousResult;
      }
      return {
        [dataID]: previousResult[dataID].concat(fetchMoreResult[dataID]),
      };
    },
  });
};

export default ({
  query, dataID, renderItem, paginated, ...otherProps
}: Props) =>
  (<FlatList
    {...otherProps}
    data={query[dataID]}
    keyExtractor={(index, item) => index}
    renderItem={renderItem}
    onEndReachedThreshold={1}
    onEndReached={() => (paginated ? fetchMoreData(query, dataID) : null)}
  />);
