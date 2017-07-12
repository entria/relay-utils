/* @flow */
import { removeDataID } from '../dataID';

it('should remove __dataID__', () => {
  const data = {
    __dataID__: '123',
    name: 'name',
    description: 'description',
    deep: {
      __dataID__: '456',
      value: 10,
    },
  };

  const input = removeDataID(data);

  expect(input).toMatchSnapshot();
});
