// @flow
function isObject(data: any): boolean {
  return typeof data === 'object';
}

export function identifyKey(data: Object): ?string {
  if (!data || data === null || Object.keys(data).length === 0) {
    return null;
  }

  const walkProps = (props, parentKeys = []) => {
    const withEdges = Object.keys(props)
      .filter(key => isObject(props[key]))
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
