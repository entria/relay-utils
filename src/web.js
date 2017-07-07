// @flow
import React from 'react';
import type { GraphQLTaggedNode, Variables, Environment } from 'react-relay';
import { QueryRenderer } from 'react-relay';

type Config = {
  query: ?GraphQLTaggedNode,
  queriesParams?: ?(props: Object) => Object,
  variables?: Variables,
  environment: Environment,
  loading: ReactClass<*>,
  error: ReactClass<*>,
};

export function createQueryRenderer(
  FragmentComponent: ReactClass<*>,
  config: Config,
): ReactClass<*> {
  const { query, queriesParams, variables, environment } = config;

  class QueryRendererWrapper extends React.Component {
    render() {
      const queryVariables = queriesParams ? queriesParams(this.props) : variables;

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
              return <FragmentComponent {...this.props} {...props} />;
            }

            return <config.loading />;
          }}
        />
      );
    }
  }

  return QueryRendererWrapper;
}
