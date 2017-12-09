// @ flow
import React, { ReactChild } from 'react';

import { graphql } from 'react-apollo';
import { View } from 'react-native';

type Data = {
  loading: boolean,
  error: string,
};
type Props = {
  data: Data,
  loadingComponent: ReactChild,
  errorComponent: ReactChild,
  DataComponent: ReactChild,
};

const renderComponentAndInjectProps = (Component, props) => {
  if (Component) {
    return <Component {...props} />;
  }
  return <View />;
};

const WrappedComponent = (props: Props) => {
  const {
    data, loadingComponent, errorComponent, DataComponent,
  } = props;

  if (data.error) {
    return renderComponentAndInjectProps(errorComponent, data.error);
  } else if (data.loading) {
    return renderComponentAndInjectProps(loadingComponent, data.loading);
  }
  return <DataComponent {...data} />;
};

const GraphQLWrapper = (DataComponent, ErrorComponent, LoadingComponent) => props => (
  <WrappedComponent
    {...props}
    DataComponent={DataComponent}
    errorComponent={ErrorComponent}
    loadingComponent={LoadingComponent}
  />
);

export default (query, DataComponent, ErrorComponent, LoadingComponent) =>
  graphql(query)(GraphQLWrapper(DataComponent, ErrorComponent, LoadingComponent));
