import { identifyKey } from '../utils';

it('should return null if data is an empty object', async () => {
  const data = {};

  const identifiedKey = identifyKey(data);

  expect(identifiedKey).toMatchSnapshot();
});

it('should return null if do not has edges', async () => {
  const data = {
    propOne: {
      subPropOne: 'john',
      subPropTwo: 'doe',
    },
    propTwo: {
      subPropThree: 'jane',
      subPropFour: 'doe',
    },
  };

  const identifiedKey = identifyKey(data);

  expect(identifiedKey).toMatchSnapshot();
});

it('should return a property with edges (propTwo)', async () => {
  const data = {
    propOne: {
      subPropOne: 'john',
      subPropTwo: 'doe',
    },
    propTwo: {
      edges: [],
    },
  };

  const identifiedKey = identifyKey(data);

  expect(identifiedKey).toMatchSnapshot();
});

it('should return a subproperty with edges (propTwo.subPropFour)', async () => {
  const data = {
    propOne: {
      subPropOne: 'john',
      subPropTwo: 'doe',
    },
    propTwo: {
      subPropThree: 'jane',
      subPropFour: {
        edges: [],
      },
    },
  };

  const identifiedKey = identifyKey(data);

  expect(identifiedKey).toMatchSnapshot();
});

it('should return the first property with edges (propOne)', async () => {
  const data = {
    propOne: {
      edges: [],
    },
    propTwo: {
      edges: [],
    },
  };

  const identifiedKey = identifyKey(data);

  expect(identifiedKey).toMatchSnapshot();
});
