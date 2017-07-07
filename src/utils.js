import get from 'lodash/get';

function getData(queryProps, key) {
  if (!queryProps) {
    return {
      edges: [],
      pageInfo: {
        hasPreviousPage: false,
        hasNextPage: false,
      },
    };
  }

  return get(queryProps, key);
}

export function hasPreviousPage(queryProps, key) {
  const identifiedKey = key || identifyKey(queryProps);

  const data = getData(queryProps, identifiedKey);
  return typeof data.pageInfo !== typeof undefined && data.pageInfo.hasPreviousPage;
}

export function hasNextPage(queryProps, key) {
  const identifiedKey = key || identifyKey(queryProps);

  const data = getData(queryProps, identifiedKey);
  return typeof data.pageInfo !== typeof undefined && data.pageInfo.hasNextPage;
}

export function createDataArray(queryProps, key) {
  const identifiedKey = key || identifyKey(queryProps);

  const data = getData(queryProps, identifiedKey);
  if (!data) {
    return [];
  }

  return data.edges.map(info => info.node);
}

export function identifyKey(queryProps) {
  if (!queryProps) {
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

  return walkPropsKeys(queryProps).join('.');
}
