"use strict";

var _core = _interopRequireDefault(require('./../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  methods: {
    handleAccountChangeClick: function handleAccountChangeClick() {
      this.$navigate({
        url: 'account'
      });
    },
    handleSchoolClick: function handleSchoolClick() {
      this.$navigate({
        url: 'school'
      });
    },
    handlePopularizeClick: function handlePopularizeClick() {
      this.$navigate({
        url: 'popularize'
      });
    },
    handleCollectionsClick: function handleCollectionsClick() {
      this.$navigate({
        url: 'collections'
      });
    },
    handleCourseClick: function handleCourseClick() {
      this.$navigate({
        url: 'mycourse'
      });
    }
  }
}, {info: {"components":{"van-icon":{"path":"../components/vant-weapp/icon/index"}},"on":{}}, handlers: {'4-41': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleAccountChangeClick($event);
      })();
    
  }},'4-42': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handlePopularizeClick($event);
      })();
    
  }},'4-43': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCourseClick($event);
      })();
    
  }},'4-44': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCollectionsClick($event);
      })();
    
  }},'4-45': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSchoolClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-icon":{"path":"../components/vant-weapp/icon/index"}},"on":{}}, handlers: {'4-41': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleAccountChangeClick($event);
      })();
    
  }},'4-42': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handlePopularizeClick($event);
      })();
    
  }},'4-43': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCourseClick($event);
      })();
    
  }},'4-44': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCollectionsClick($event);
      })();
    
  }},'4-45': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSchoolClick($event);
      })();
    
  }}}, models: {}, refs: undefined });