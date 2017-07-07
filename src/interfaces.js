// @flow
export type PageInfo = {
  hasPreviousPage: boolean,
  hasNextPage: boolean,
};

export type ConnectionData = {
  edges?: ?Array<any>,
  pageInfo?: ?PageInfo,
};
