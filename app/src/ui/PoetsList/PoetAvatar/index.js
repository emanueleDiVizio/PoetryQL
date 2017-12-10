//  @ flow
import { graphql } from 'react-apollo';

import PoetAvatar from './PoetAvatar';
import poetPortraitQuery from './queries/poetPortraitQuery.gql';

export default graphql(poetPortraitQuery, {
  options: ({ name }) => ({ variables: { name } }),
})(PoetAvatar);
