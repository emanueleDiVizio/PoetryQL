import React, { Component } from 'react';
import { View } from 'react-native';

import PaintingBackgroundView, { Painting } from '../PaintingBackground';
import PoetsList from '../PoetsList';
import { Poet } from '../PoetsList/types';
import PoemsContainer from '../PoemsContainer';

type Props = {
  painting: Painting,
  poets: Poet,
};

type State = {
  displayingPoem: boolean,
  name: string,
};
class MainScreen extends Component<Props, State> {
  state = {
    displayingPoem: false,
    name: '',
  };

  render() {
    const { painting, poets, poem } = this.props;
    return (
      <View>
        <PaintingBackgroundView data={painting} />
        <PoetsList
          data={poets}
          onPoetPress={(name) => {
            poem.refetch({
              author: name,
              run: true,
            });
            this.setState({ displayingPoem: true, name });
          }}
          show={!this.state.displayingPoem}
        />
        <PoemsContainer data={poem} name={this.state.name} show={this.state.displayingPoem} />
      </View>
    );
  }
}

export default MainScreen;
