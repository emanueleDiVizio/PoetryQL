//  @ flow
import apollo from '../../config/apollo/hoc';

import getRandomPainting from './gql/getRandomPaintingQuery.gql';
import PaintingBackground from './PaintingBackground';

export default apollo({ query: getRandomPainting }, PaintingBackground);
