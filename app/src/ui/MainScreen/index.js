//  @ flow
import { compose, graphql } from 'react-apollo';

import paintingQuery from './queries/paintingQuery.gql';
import poetsQuery from './queries/poetsQuery.gql';
import poemQuery from './queries/poemQuery.gql';
import MainScreen from './MainScreen';

export default compose(
  graphql(paintingQuery, { name: 'painting' }),
  graphql(poetsQuery, {
    name: 'poets',
    options: { variables: { size: 10, offset: 0 } },
  }),
  graphql(poemQuery, {
    name: 'poem',
    options: {
      variables: {
        author: 'William Shakespeare',
        run: false,
      },
    },
  }),
)(MainScreen);
