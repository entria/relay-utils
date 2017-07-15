// @flow

import React from 'react';
import { QueryRenderer } from 'react-relay';

import type { ReactClass } from 'react';
import type { GraphQLTaggedNode, Variables, Environment } from 'react-relay';

type Config = {
  query: ?GraphQLTaggedNode,
  queriesParams?: ?(props: Object) => Object,
  variables?: Variables,
  environment: Environment,
  loading: ReactClass<*>,
  error: ReactClass<*>,
};

export default function createQueryRenderer(
  FragmentComponent: ReactClass<*>,
  config: Config,
): ReactClass<*> {
  const { query, queriesParams, variables, environment } = config;

  const QueryRendererWrapper = wrapperProps => {
    const queryVariables = queriesParams ? queriesParams(wrapperProps) : variables;

    return (
      <QueryRenderer
        query={query}
        variables={queryVariables}
        environment={environment}
        render={({ error, props }) => {
          if (error) {
            return <config.error error={error} />;
          }

          if (props) {
            return <FragmentComponent {...wrapperProps} {...props} />;
          }

          return <config.loading />;
        }}
      />
    );
  };

  return QueryRendererWrapper;
}
