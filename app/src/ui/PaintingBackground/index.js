//  @ flow
import { graphql } from 'react-apollo';

import PaintingBackground from './PaintingBackground';
import apolloWrapper from '../../config/apollo/hoc';
import paintingQuery from './queries/paintingQuery.gql';

export default graphql(paintingQuery)(apolloWrapper(PaintingBackground));
