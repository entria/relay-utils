'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.createQueryRenderer = createQueryRenderer;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRelay = require('react-relay');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @TODO - eslint
function createQueryRenderer(FragmentComponent, config) {
  var query = config.query,
      queriesParams = config.queriesParams,
      variables = config.variables,
      environment = config.environment;


  var QueryRendererWrapper = function QueryRendererWrapper(wrapperProps) {
    var queryVariables = queriesParams ? queriesParams(wrapperProps) : variables;

    return _react2.default.createElement(_reactRelay.QueryRenderer, {
      query: query,
      variables: queryVariables,
      environment: environment,
      render: function render(_ref) {
        var error = _ref.error,
            props = _ref.props;

        if (error) {
          return _react2.default.createElement(config.error, { error: error });
        }

        if (props) {
          return _react2.default.createElement(FragmentComponent, _extends({}, wrapperProps, props));
        }

        return _react2.default.createElement(config.loading, null);
      }
    });
  };

  return QueryRendererWrapper;
}