"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('./vendor.js')(2));

var _core = _interopRequireDefault(require('./vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import eventHub from './common/eventHub'
_core["default"].app({
  hooks: {},
  globalData: {
    userInfo: null,
    activeCourseKey: 0
  },
  onLaunch: function onLaunch() {
    return _regeneratorRuntime2["default"].async(function onLaunch$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  methods: {}
}, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {}, refs: undefined });