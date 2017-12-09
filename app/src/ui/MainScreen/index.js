//  @ flow
import apollo from '../../config/apollo/hoc';

import mainScreenQuery from './gql/mainScreenQuery.gql';
import MainScreen from './MainScreen';

export default apollo({ query: mainScreenQuery }, MainScreen);
