//  @ flow
import React from 'react';
import { View } from 'react-native';
import PoetItem from './PoetItem';
import { Poet } from './types';
import Styles, { itemSize } from './styles';
import GraphQlList from '../GraphQlList';

type Data = {
  authors: Poet[],
};

type Props = {
  data: Data,
  onPoetPress: Function,
  show: boolean,
};

export default ({ data, onPoetPress, show }: Props) =>
  (show ? (
    <View style={Styles.containerView}>
      <GraphQlList
        style={Styles.list}
        contentContainerStyle={Styles.contentContainer}
        query={data}
        dataID="authors"
        paginated
        numColumns={2}
        renderItem={({ item }) => (
          <PoetItem poet={item} onPoetPress={onPoetPress} size={itemSize} />
        )}
      />
    </View>
  ) : null);
