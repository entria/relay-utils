import { identifyKey } from '../utils';

it('should return null if data is an empty object', () => {
  const data = {};

  const identifiedKey = identifyKey(data);

  expect(identifiedKey).toMatchSnapshot();
});

it('should return null if do not has edges', () => {
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

it('should return a property with edges (propTwo)', () => {
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

it('should return a subproperty with edges (propTwo.subPropFour)', () => {
  const data = {
    propOne: {
      subPropOne: 'john',
      subPropTwo: 'doe',
    },
    propTwo: {
      subPropThree: null,
      subPropFour: {
        edges: [],
      },
    },
  };

  const identifiedKey = identifyKey(data);

  expect(identifiedKey).toMatchSnapshot();
});

it('should return the first property with edges (propOne)', () => {
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
