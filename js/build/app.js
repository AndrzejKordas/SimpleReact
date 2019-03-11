'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Logo = require('./components/Logo');

var _Logo2 = _interopRequireDefault(_Logo);

var _Header = require('./components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Tresci = require('./components/Tresci');

var _Tresci2 = _interopRequireDefault(_Tresci);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
   'div',
   null,
   _react2.default.createElement(_Logo2.default, null),
   _react2.default.createElement(_Header2.default, null),
   _react2.default.createElement(_Tresci2.default, null)
), document.getElementById('app'));