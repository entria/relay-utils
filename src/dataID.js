/* @flow */
import { isValidObject } from './utils';

/**
 * Useful to remove __dataID__ to send data as mutation input
 */
export const removeDataID = (relayObj: Object) =>
  Object.keys(relayObj).filter(key => key !== '__dataID__').reduce((obj, key) => {
    const value = relayObj[key];
    const simpleValue = isValidObject(value) ? removeDataID(value) : value;

    return {
      ...obj,
      [key]: simpleValue,
    };
  }, {});
