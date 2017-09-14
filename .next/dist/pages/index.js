'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PageLayout = require('../components/PageLayout');

var _PageLayout2 = _interopRequireDefault(_PageLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  container: {
    margin: '0 auto',
    marginTop: '50px',
    padding: '50px 60px',
    maxWidth: '800px',
    backgroundColor: 'rgba(220, 208, 192, 0.35)',
    color: '#c0b283',
    boxShadow: '1px 2px 10px lightgrey'
  },
  title: {
    fontFamily: '"Open Sans Condensed", sans-serif',
    textTransform: 'uppercase',
    fontSize: '48px'
  },
  sub: {
    fontFamily: '"Open Sans", sans-serif',
    fontWeight: 'bold',
    fontSize: '20px',
    textTransform: 'uppercase',
    marginBottom: '20px'
  },
  para: {
    fontFamily: '"Open Sans", sans-serif',
    fontSize: '18px',
    lineHeight: '1.5'
  }
};

exports.default = function () {
  return _react2.default.createElement(_PageLayout2.default, null, _react2.default.createElement('div', { style: style.container, 'data-jsx': 320253851
  }, _react2.default.createElement('h1', { style: style.title, 'data-jsx': 320253851
  }, 'Sophisticated Page'), _react2.default.createElement('h2', { style: style.sub, 'data-jsx': 320253851
  }, 'Color Strategy: Material Design'), _react2.default.createElement('p', { style: style.para, 'data-jsx': 320253851
  }, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia d eserunt mollit anim id est laborum.')), _react2.default.createElement(_style2.default, {
    styleId: 320253851,
    css: 'body{background-color:#fff}nav{background-color:#fff;border-bottom:1px solid #f4f4f4}a{font-family:"Open Sans",sans-serif;font-weight:bold;color:#373737;opacity:0.5}a:hover{opacity:0.8}'
  }));
};