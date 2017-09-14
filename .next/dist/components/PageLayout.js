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

var _jsxFileName = '/Users/camille/Desktop/webdev/assignment1/components/PageLayout.js';


var Layout = function Layout(props) {
  return _react2.default.createElement('div', {
    'data-jsx': 1454892726,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('meta', { charset: 'utf-8', 'data-jsx': 1454892726,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), _react2.default.createElement('title', {
    'data-jsx': 1454892726,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, 'Font and Color (NextJS)'), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Open+Sans|Open+Sans+Condensed:700', rel: 'stylesheet', 'data-jsx': 1454892726,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Droid+Serif|Oswald', rel: 'stylesheet', 'data-jsx': 1454892726,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Fauna+One|Playfair+Display', rel: 'stylesheet', 'data-jsx': 1454892726,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Prata', rel: 'stylesheet', 'data-jsx': 1454892726,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Alfa+Slab+One|Gentium+Book+Basic', rel: 'stylesheet', 'data-jsx': 1454892726,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  })), _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), props.children, _react2.default.createElement(_style2.default, {
    styleId: 1454892726,
    css: '*,*:before,*:after{box-sizing:border-box;margin:0;padding:0}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUGFnZUxheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQnVCLEFBRytCLHNCQUNiLFNBQ0MsVUFDWiIsImZpbGUiOiJjb21wb25lbnRzL1BhZ2VMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NhbWlsbGUvRGVza3RvcC93ZWJkZXYvYXNzaWdubWVudDEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJ1xuXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICA8dGl0bGU+Rm9udCBhbmQgQ29sb3IgKE5leHRKUyk8L3RpdGxlPlxuICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnN8T3BlbitTYW5zK0NvbmRlbnNlZDo3MDBcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9RHJvaWQrU2VyaWZ8T3N3YWxkXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUZhdW5hK09uZXxQbGF5ZmFpcitEaXNwbGF5XCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVByYXRhXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFsZmErU2xhYitPbmV8R2VudGl1bStCb29rK0Jhc2ljXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgPC9IZWFkPlxuICAgIDxIZWFkZXIgLz5cbiAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICosICo6YmVmb3JlLCAqOmFmdGVyIHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuIl19 */\n/*@ sourceURL=components/PageLayout.js */'
  }));
};

exports.default = Layout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUGFnZUxheW91dC5qcyJdLCJuYW1lcyI6WyJIZWFkIiwiSGVhZGVyIiwiTGF5b3V0IiwicHJvcHMiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTSxTQUFTLFNBQVQsQUFBUyxPQUFBLEFBQUMsT0FBRDt5QkFDYixjQUFBO2dCQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLDZDQUNRLFNBQU4sQUFBYyxxQkFBZDs7Z0JBQUE7a0JBREYsQUFDRSxBQUNBO0FBREE7c0JBQ0EsY0FBQTtnQkFBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBRkYsQUFFRSxBQUNBLG9FQUFNLE1BQU4sQUFBVyw2RUFBNEUsS0FBdkYsQUFBMkYsMEJBQTNGOztnQkFBQTtrQkFIRixBQUdFLEFBQ0E7QUFEQTs4Q0FDTSxNQUFOLEFBQVcsOERBQTZELEtBQXhFLEFBQTRFLDBCQUE1RTs7Z0JBQUE7a0JBSkYsQUFJRSxBQUNBO0FBREE7OENBQ00sTUFBTixBQUFXLHNFQUFxRSxLQUFoRixBQUFvRiwwQkFBcEY7O2dCQUFBO2tCQUxGLEFBS0UsQUFDQTtBQURBOzhDQUNNLE1BQU4sQUFBVyxpREFBZ0QsS0FBM0QsQUFBK0QsMEJBQS9EOztnQkFBQTtrQkFORixBQU1FLEFBQ0E7QUFEQTs4Q0FDTSxNQUFOLEFBQVcsNEVBQTJFLEtBQXRGLEFBQTBGLDBCQUExRjs7Z0JBQUE7a0JBUkosQUFDRSxBQU9FLEFBRUY7QUFGRTt1QkFFRixBQUFDOztnQkFBRDtrQkFWRixBQVVFLEFBQ0M7QUFERDtBQUFBLFlBVkYsQUFXUzthQVhUO1NBRGEsQUFDYjtBQUFBO0FBREYsQUF1QkE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiUGFnZUxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvY2FtaWxsZS9EZXNrdG9wL3dlYmRldi9hc3NpZ25tZW50MSJ9