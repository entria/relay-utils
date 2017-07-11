'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.web = exports.identifyKey = exports.createDataArray = exports.hasNextPage = exports.hasPreviousPage = undefined;

var _connections = require('./connections');

Object.defineProperty(exports, 'hasPreviousPage', {
  enumerable: true,
  get: function get() {
    return _connections.hasPreviousPage;
  }
});
Object.defineProperty(exports, 'hasNextPage', {
  enumerable: true,
  get: function get() {
    return _connections.hasNextPage;
  }
});
Object.defineProperty(exports, 'createDataArray', {
  enumerable: true,
  get: function get() {
    return _connections.createDataArray;
  }
});

var _utils = require('./utils');

Object.defineProperty(exports, 'identifyKey', {
  enumerable: true,
  get: function get() {
    return _utils.identifyKey;
  }
});

var _web2 = require('./web');

var _web3 = _interopRequireDefault(_web2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.web = _web3.default;