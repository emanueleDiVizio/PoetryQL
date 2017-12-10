//  @ flow
import { graphql } from 'react-apollo';

import PoemsContainer from './PoemsContainer';
import apolloWrapper from '../../config/apollo/hoc';
import poemQuery from './queries/poemQuery.gql';

export default graphql(poemQuery, {
  options: ({ name, show }) => ({ variables: { author: name, run: show } }),
})(apolloWrapper(PoemsContainer));
