//  @ flow
import apollo from '../../../config/apollo/hoc';

import getPoetAvatar from './gql/getPoetAvatar.gql';
import PoetAvatar from './PoetAvatar';

export default apollo(
  {
    query: getPoetAvatar,
    options: {
      options: ({ name }) => ({ variables: { name } }),
    },
  },
  PoetAvatar,
);
