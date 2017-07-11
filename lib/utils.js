'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.identifyKey = identifyKey;
function isObject(data) {
  return (typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object';
}

function identifyKey(data) {
  var isUndefined = !data;
  var isNull = data === null;
  var isntObject = !isObject(data);
  var isEmpty = Object.keys(data).length === 0;
  if (isUndefined || isNull || isntObject || isEmpty) {
    return null;
  }

  var walkProps = function walkProps(props) {
    var parentKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    var withEdges = Object.keys(props).filter(function (key) {
      return isObject(props[key]);
    }).map(function (key) {
      var newProps = props[key];
      var parentKeysAndMe = parentKeys.concat(key);

      if (typeof newProps.edges !== 'undefined') {
        return parentKeysAndMe.join('.');
      }

      return walkProps(newProps, parentKeysAndMe);
    }).filter(function (key) {
      return key !== null;
    });

    return withEdges.length > 0 ? withEdges[0] : null;
  };

  return walkProps(data);
}