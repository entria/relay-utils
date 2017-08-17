// @flow
import get from 'lodash/get';

import type { ConnectionData } from './interfaces';

const defaultConnectionData = {
  edges: [],
  pageInfo: {
    hasPreviousPage: false,
    hasNextPage: false,
  },
};

function getConnectionData(data: Object, key): ConnectionData {
  if (!data) {
    return defaultConnectionData;
  }

  return get(data, key) || defaultConnectionData;
}

export function hasPreviousPage(data: Object, key: string): boolean {
  if (!key) return false;

  const { pageInfo } = getConnectionData(data, key);
  return pageInfo != null && pageInfo.hasPreviousPage;
}

export function hasNextPage(data: Object, key: string): boolean {
  if (!key) return false;

  const { pageInfo } = getConnectionData(data, key);
  return pageInfo != null && pageInfo.hasNextPage;
}

export function createDataArray(data: Object, key: string): Array<Object> {
  if (!key) return [];

  const { edges } = getConnectionData(data, key);
  if (!Array.isArray(edges)) {
    return [];
  }

  return edges.map(info => info.node);
}
