//  @ flow
import { graphql } from 'react-apollo';

import PoetsList from './PoetsList';
import apolloWrapper from '../../config/apollo/hoc';
import poetsQuery from './queries/poetsQuery.gql';

export default graphql(poetsQuery, {
  options: { variables: { size: 10, offset: 0 } },
})(apolloWrapper(PoetsList));
