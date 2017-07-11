// @flow
function isValidObject(data: any): boolean {
  const isntNull = data !== null;
  const isObject = isntNull && typeof data === 'object';

  return isObject && Object.keys(data).length > 0;
}

export function identifyKey(data: Object): ?string {
  if (!isValidObject(data)) {
    return null;
  }

  const walkProps = (props, parentKeys = []) => {
    const withEdges = Object.keys(props)
      .filter(key => isValidObject(props[key]))
      .map(key => {
        const newProps = props[key];
        const parentKeysAndMe = parentKeys.concat(key);

        if (typeof newProps.edges !== 'undefined') {
          return parentKeysAndMe.join('.');
        }

        return walkProps(newProps, parentKeysAndMe);
      })
      .filter(key => key !== null);

    return withEdges.length > 0 ? withEdges[0] : null;
  };

  return walkProps(data);
}
