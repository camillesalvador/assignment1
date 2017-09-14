'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/camille/Desktop/webdev/assignment1/components/Header.js';


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
  return _react2.default.createElement('nav', { style: style.navbox, __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, _react2.default.createElement(_link2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement('a', { style: style.navlinks, __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, 'Sophisticated')), _react2.default.createElement(_link2.default, { href: '/energetic', __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, _react2.default.createElement('a', { style: style.navlinks, __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, 'Energetic')), _react2.default.createElement(_link2.default, { href: '/fun', __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, _react2.default.createElement('a', { style: style.navlinks, __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, 'Fun')), _react2.default.createElement(_link2.default, { href: '/corporate', __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, _react2.default.createElement('a', { style: style.navlinks, __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, 'Corporate')), _react2.default.createElement(_link2.default, { href: '/relaxed', __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, _react2.default.createElement('a', { style: style.navlinks, __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, 'Relaxed')));
};

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJzdHlsZSIsIm5hdmJveCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIm5hdmxpbmtzIiwidGV4dERlY29yYXRpb24iLCJ0ZXh0QWxpZ24iLCJtYXJnaW4iLCJ0ZXh0VHJhbnNmb3JtIiwiSGVhZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTTs7YUFDSSxBQUNHLEFBQ1Q7b0JBSFUsQUFDSixBQUVVLEFBRWxCO0FBSlEsQUFDTjs7b0JBR1EsQUFDUSxBQUNoQjtlQUZRLEFBRUcsQUFDWDtZQUhRLEFBR0EsQUFDUjttQkFUSixBQUFjLEFBS0YsQUFJTztBQUpQLEFBQ1I7QUFOVSxBQUNaOztBQVlGLElBQU0sU0FBUyxTQUFULEFBQVMsU0FBQTt5QkFDYixjQUFBLFNBQUssT0FBTyxNQUFaLEFBQWtCO2dCQUFsQjtrQkFBQSxBQUNFO0FBREY7R0FBQSxrQkFDRSxBQUFDLGdDQUFLLE1BQU4sQUFBVztnQkFBWDtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxPQUFHLE9BQU8sTUFBVixBQUFnQjtnQkFBaEI7a0JBQUE7QUFBQTtLQUZKLEFBQ0UsQUFDRSxBQUVGLG1DQUFBLEFBQUMsZ0NBQUssTUFBTixBQUFXO2dCQUFYO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLE9BQUcsT0FBTyxNQUFWLEFBQWdCO2dCQUFoQjtrQkFBQTtBQUFBO0tBTEosQUFJRSxBQUNFLEFBRUYsK0JBQUEsQUFBQyxnQ0FBSyxNQUFOLEFBQVc7Z0JBQVg7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsT0FBRyxPQUFPLE1BQVYsQUFBZ0I7Z0JBQWhCO2tCQUFBO0FBQUE7S0FSSixBQU9FLEFBQ0UsQUFFRix5QkFBQSxBQUFDLGdDQUFLLE1BQU4sQUFBVztnQkFBWDtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxPQUFHLE9BQU8sTUFBVixBQUFnQjtnQkFBaEI7a0JBQUE7QUFBQTtLQVhKLEFBVUUsQUFDRSxBQUVGLCtCQUFBLEFBQUMsZ0NBQUssTUFBTixBQUFXO2dCQUFYO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLE9BQUcsT0FBTyxNQUFWLEFBQWdCO2dCQUFoQjtrQkFBQTtBQUFBO0tBZlMsQUFDYixBQWFFLEFBQ0U7QUFmTixBQW9CQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJIZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NhbWlsbGUvRGVza3RvcC93ZWJkZXYvYXNzaWdubWVudDEifQ==