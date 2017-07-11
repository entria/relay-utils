// @flow
export function identifyKey(data: Object): ?string {
  if (!data) {
    return null;
  }

  const walkKeys = props => {
    const key = Object.keys(props)[0];
    const arrayKeys = [key];
    const newProps = props[key];

    if (!newProps.edges) {
      return arrayKeys.concat(walkKeys(newProps));
    }

    return arrayKeys;
  };

  return walkKeys(data).join('.');
}
