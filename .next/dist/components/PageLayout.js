'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Layout = function Layout(props) {
  return _react2.default.createElement('div', {
    'data-jsx': 1454892726
  }, _react2.default.createElement(_head2.default, null, _react2.default.createElement('meta', { charset: 'utf-8', 'data-jsx': 1454892726
  }), _react2.default.createElement('title', {
    'data-jsx': 1454892726
  }, 'Font and Color (NextJS)'), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Open+Sans|Open+Sans+Condensed:700', rel: 'stylesheet', 'data-jsx': 1454892726
  }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Droid+Serif|Oswald', rel: 'stylesheet', 'data-jsx': 1454892726
  }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Fauna+One|Playfair+Display', rel: 'stylesheet', 'data-jsx': 1454892726
  }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Prata', rel: 'stylesheet', 'data-jsx': 1454892726
  }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Alfa+Slab+One|Gentium+Book+Basic', rel: 'stylesheet', 'data-jsx': 1454892726
  })), _react2.default.createElement(_Header2.default, null), props.children, _react2.default.createElement(_style2.default, {
    styleId: 1454892726,
    css: '*,*:before,*:after{box-sizing:border-box;margin:0;padding:0}'
  }));
};

exports.default = Layout;