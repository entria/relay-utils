'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.hasPreviousPage = hasPreviousPage;
exports.hasNextPage = hasNextPage;
exports.createDataArray = createDataArray;
exports.identifyKey = identifyKey;

var _get = require('lodash/get');

var _get2 = _interopRequireDefault(_get);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getConnectionData(data, key) {
  if (!data) {
    return {
      edges: [],
      pageInfo: {
        hasPreviousPage: false,
        hasNextPage: false
      }
    };
  }

  return (0, _get2.default)(data, key);
}

function hasPreviousPage(data, key) {
  var identifiedKey = key || identifyKey(data);

  var _getConnectionData = getConnectionData(data, identifiedKey),
      pageInfo = _getConnectionData.pageInfo;

  return (typeof pageInfo === 'undefined' ? 'undefined' : _typeof(pageInfo)) !== (typeof undefined === 'undefined' ? 'undefined' : _typeof(undefined)) && pageInfo.hasPreviousPage;
}

function hasNextPage(data, key) {
  var identifiedKey = key || identifyKey(data);

  var _getConnectionData2 = getConnectionData(data, identifiedKey),
      pageInfo = _getConnectionData2.pageInfo;

  return (typeof pageInfo === 'undefined' ? 'undefined' : _typeof(pageInfo)) !== (typeof undefined === 'undefined' ? 'undefined' : _typeof(undefined)) && pageInfo.hasNextPage;
}

function createDataArray(data, key) {
  var identifiedKey = key || identifyKey(data);

  var _getConnectionData3 = getConnectionData(data, identifiedKey),
      edges = _getConnectionData3.edges;

  return edges.map(function (info) {
    return info.node;
  });
}

function identifyKey(data) {
  if (!data) {
    return null;
  }

  var walkKeys = function walkKeys(props) {
    var key = Object.keys(props)[0];
    var arrayKeys = [key];
    var newProps = props[key];

    if (!newProps.edges) {
      return arrayKeys.concat(walkKeys(newProps));
    }

    return arrayKeys;
  };

  return walkKeys(data).join('.');
}