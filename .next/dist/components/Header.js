'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  navbox: {
    display: 'flex',
    justifyContent: 'center'
  },
  navlinks: {
    textDecoration: 'none',
    textAlign: 'center',
    margin: '20px',
    textTransform: 'uppercase'
  }
};

var Header = function Header() {
  return _react2.default.createElement('nav', { style: style.navbox }, _react2.default.createElement(_link2.default, { href: './' }, _react2.default.createElement('a', { style: style.navlinks }, 'Sophisticated')), _react2.default.createElement(_link2.default, { href: './energetic' }, _react2.default.createElement('a', { style: style.navlinks }, 'Energetic')), _react2.default.createElement(_link2.default, { href: './fun' }, _react2.default.createElement('a', { style: style.navlinks }, 'Fun')), _react2.default.createElement(_link2.default, { href: './corporate' }, _react2.default.createElement('a', { style: style.navlinks }, 'Corporate')), _react2.default.createElement(_link2.default, { href: './relaxed' }, _react2.default.createElement('a', { style: style.navlinks }, 'Relaxed')));
};

exports.default = Header;