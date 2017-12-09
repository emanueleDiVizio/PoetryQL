//  @ flow
import apollo from '../../config/apollo/hoc';

import getPoetsNames from './gql/getPoetsNames.gql';
import PoetsList from './PoetsList';

export default apollo(
  {
    query: getPoetsNames,
    options: {
      options: {
        variables: { offset: 0, pageSize: 2 },
      },
    },
  },
  PoetsList,
);
