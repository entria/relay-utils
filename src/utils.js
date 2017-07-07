// @flow
import get from 'lodash/get';

import type { ConnectionData } from './interfaces';

function getConnectionData(data: Object, key): ConnectionData {
  if (!data) {
    return {
      edges: [],
      pageInfo: {
        hasPreviousPage: false,
        hasNextPage: false,
      },
    };
  }

  return get(data, key);
}

export function hasPreviousPage(data: Object, key: string): boolean {
  const identifiedKey = key || identifyKey(data);

  const { pageInfo } = getConnectionData(data, identifiedKey);
  return typeof pageInfo !== typeof undefined && pageInfo.hasPreviousPage;
}

export function hasNextPage(data: Object, key: string): boolean {
  const identifiedKey = key || identifyKey(data);

  const { pageInfo } = getConnectionData(data, identifiedKey);
  return typeof pageInfo !== typeof undefined && pageInfo.hasNextPage;
}

export function createDataArray(data: Object, key: string): Array<Object> {
  const identifiedKey = key || identifyKey(data);

  const { edges } = getConnectionData(data, identifiedKey);
  return edges.map(info => info.node);
}

export function identifyKey(data: Object): ?string {
  if (!data) {
    return null;
  }

  const walkPropsKeys = props => {
    const key = Object.keys(props)[0];
    const arrayKeys = [key];
    const newProps = props[key];

    if (!newProps.edges) {
      return arrayKeys.concat(walkPropsKeys(newProps));
    }

    return arrayKeys;
  };

  return walkPropsKeys(data).join('.');
}
