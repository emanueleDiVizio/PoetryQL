import React, { Component } from 'react';
import { View } from 'react-native';

import PaintingBackgroundView from '../PaintingBackground';
import PoetsList from '../PoetsList';
import PoemsContainer from '../PoemsContainer';

type Props = {};

type State = {
  shownPoet: string,
};
class MainScreen extends Component<Props, State> {
  state = {
    shownPoet: '',
  };

  render() {
    return (
      <View>
        <PaintingBackgroundView />
        <PoetsList
          onPoetPress={(name) => {
            this.setState({ shownPoet: name });
          }}
          show={this.state.shownPoet === ''}
        />
        <PoemsContainer
          name={this.state.shownPoet}
          show={this.state.shownPoet !== ''}
          onClose={() => this.setState({ shownPoet: '' })}
        />
      </View>
    );
  }
}

export default MainScreen;
