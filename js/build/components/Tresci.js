'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tresci = function (_React$Component) {
    _inherits(Tresci, _React$Component);

    function Tresci(props) {
        _classCallCheck(this, Tresci);

        var _this = _possibleConstructorReturn(this, (Tresci.__proto__ || Object.getPrototypeOf(Tresci)).call(this, props));

        _this.state = {
            tresc1: localStorage.getItem('Opis'),
            tresc2: localStorage.getItem('Opis2'),
            tytul1: localStorage.key(1),
            tytul2: localStorage.key(2)
        };

        return _this;
    }

    _createClass(Tresci, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'grid' },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'h3',
                        null,
                        this.state.tytul1
                    ),
                    this.state.tresc1
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'h3',
                        null,
                        this.state.tytul2
                    ),
                    this.state.tresc2
                )
            );
        }
    }]);

    return Tresci;
}(_react2.default.Component);

exports.default = Tresci;