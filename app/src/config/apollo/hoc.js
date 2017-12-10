// @ flow
import React, { ReactChild } from 'react';
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
    loadingComponent, errorComponent, DataComponent, ...otherProps
  } = props;

  const { data: { error, loading } } = otherProps;

  if (error) {
    return renderComponentAndInjectProps(errorComponent, error);
  } else if (loading) {
    return renderComponentAndInjectProps(loadingComponent, loading);
  }

  return <DataComponent {...otherProps} />;
};

const GraphQLWrapper = (DataComponent, ErrorComponent, LoadingComponent) => props => (
  <WrappedComponent
    {...props}
    DataComponent={DataComponent}
    errorComponent={ErrorComponent}
    loadingComponent={LoadingComponent}
  />
);

export default GraphQLWrapper;
