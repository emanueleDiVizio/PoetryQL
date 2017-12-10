//  @ flow
import React from 'react';
import { View, Text, Dimensions, ScrollView } from 'react-native';

const { height, width } = Dimensions.get('window');

type Poem = {
  lines: string[],
  title: string,
  author: string,
};
type Props = {
  poem: Poem,
  show: boolean,
};

export default ({ poem, show }: Props) => {
  if (show) {
    return (
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width,
          height,
        }}
      >
        <View
          style={{
            flex: 0,
            marginTop: 48,
            marginLeft: 64,
            marginRight: 64,
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white', textAlign: 'center' }}>{poem.author}</Text>

          <Text style={{ color: 'white', textAlign: 'center' }}>{poem.title}</Text>
        </View>
        <View
          style={{
            flex: 1,
            marginTop: 24,
            alignItems: 'center',
          }}
        >
          <ScrollView>
            <View
              style={{
                height: 52,
              }}
            />
            {poem.lines.map(line => (
              <Text style={{ color: 'white', textAlign: 'center' }}>{line}</Text>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
  return null;
};