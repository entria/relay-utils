// @flow
import get from 'lodash/get';

import type { ConnectionData } from './interfaces';
import { identifyKey } from './utils';

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
  if (identifiedKey === null) {
    return false;
  }

  const { pageInfo } = getConnectionData(data, identifiedKey);
  return typeof pageInfo !== typeof undefined && pageInfo.hasPreviousPage;
}

export function hasNextPage(data: Object, key: string): boolean {
  const identifiedKey = key || identifyKey(data);
  if (identifiedKey === null) {
    return false;
  }

  const { pageInfo } = getConnectionData(data, identifiedKey);
  return typeof pageInfo !== typeof undefined && pageInfo.hasNextPage;
}

export function createDataArray(data: Object, key: string): Array<Object> {
  const identifiedKey = key || identifyKey(data);
  if (identifiedKey === null) {
    return [];
  }

  const { edges } = getConnectionData(data, identifiedKey);
  if (!Array.isArray(edges)) {
    return [];
  }

  return edges.map(info => info.node);
}
