'use strict';

var _utils = require('../utils');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

it('should return null if data is an empty object', _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
  var data, identifiedKey;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          data = {};
          identifiedKey = (0, _utils.identifyKey)(data);


          expect(identifiedKey).toMatchSnapshot();

        case 3:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, undefined);
})));

it('should return null if do not has edges', _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
  var data, identifiedKey;
  return regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          data = {
            propOne: {
              subPropOne: 'john',
              subPropTwo: 'doe'
            },
            propTwo: {
              subPropThree: 'jane',
              subPropFour: 'doe'
            }
          };
          identifiedKey = (0, _utils.identifyKey)(data);


          expect(identifiedKey).toMatchSnapshot();

        case 3:
        case 'end':
          return _context2.stop();
      }
    }
  }, _callee2, undefined);
})));

it('should return a property with edges (propTwo)', _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
  var data, identifiedKey;
  return regeneratorRuntime.wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          data = {
            propOne: {
              subPropOne: 'john',
              subPropTwo: 'doe'
            },
            propTwo: {
              edges: []
            }
          };
          identifiedKey = (0, _utils.identifyKey)(data);


          expect(identifiedKey).toMatchSnapshot();

        case 3:
        case 'end':
          return _context3.stop();
      }
    }
  }, _callee3, undefined);
})));

it('should return a subproperty with edges (propTwo.subPropFour)', _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
  var data, identifiedKey;
  return regeneratorRuntime.wrap(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          data = {
            propOne: {
              subPropOne: 'john',
              subPropTwo: 'doe'
            },
            propTwo: {
              subPropThree: 'jane',
              subPropFour: {
                edges: []
              }
            }
          };
          identifiedKey = (0, _utils.identifyKey)(data);


          expect(identifiedKey).toMatchSnapshot();

        case 3:
        case 'end':
          return _context4.stop();
      }
    }
  }, _callee4, undefined);
})));

it('should return the first property with edges (propOne)', _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
  var data, identifiedKey;
  return regeneratorRuntime.wrap(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          data = {
            propOne: {
              edges: []
            },
            propTwo: {
              edges: []
            }
          };
          identifiedKey = (0, _utils.identifyKey)(data);


          expect(identifiedKey).toMatchSnapshot();

        case 3:
        case 'end':
          return _context5.stop();
      }
    }
  }, _callee5, undefined);
})));