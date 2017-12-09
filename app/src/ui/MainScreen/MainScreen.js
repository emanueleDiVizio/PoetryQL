import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';

import PaintingBackgroundView, { Painting } from '../PaintingBackground';
import PoetsList from '../PoetsList';
import { Poet } from '../PoetsList/types';

const { height, width } = Dimensions.get('window');

type Props = {
  painting: Painting,
  poets: Poet,
};

type State = {
  displayingPoem: boolean,
};
class MainScreen extends Component<Props, State> {
  state = {
    displayingPoem: false,
  };

  render() {
    const { painting, poets } = this.props;
    return (
      <View>
        <PaintingBackgroundView data={painting} />
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
          <PoetsList
            data={poets}
            onPoetPress={name => this.setState({ displayingPoem: true })}
            show={!this.state.displayingPoem}
          />
        </View>
      </View>
    );
  }
}

export default MainScreen;
