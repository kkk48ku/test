"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _util = require('../utils/util.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].component({
  props: {
    label: String,
    inputVal: String,
    actionBtn: String
  },
  watch: {
    loading: function loading(val) {
      console.log(val);
    }
  },
  data: {
    loading: false
  },
  methods: {
    handleInputChange: function handleInputChange(e) {
      (0, _util.debounce)(this.searchAjax, 200);
      var val = e.$wx.detail.value;
      this.inputVal = val;
      this.$emit('inputChange', val);
    },
    handleInputBlur: function handleInputBlur(e) {
      this.searchAjax();
    },
    handleSearchBtnClick: function handleSearchBtnClick(e) {
      this.searchAjax();
    },
    searchAjax: function searchAjax() {
      var _this = this;

      if (!this.loading) {
        this.loading = true;
        setTimeout(function () {
          console.log('发送请求');
          _this.loading = false;
        }, 3000);
      }

      return;
    },
    searchDatahandle: function searchDatahandle(data) {}
  }
}, {info: {"components":{"van-search":{"path":"vant-weapp\\search\\index"}},"on":{}}, handlers: {'9-461': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event)
      })();
    
  }, "blur": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputBlur($event)
      })();
    
  }},'9-463': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event)
      })();
    
  }}}, models: {'208': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }} }, {info: {"components":{"van-search":{"path":"vant-weapp\\search\\index"}},"on":{}}, handlers: {'9-461': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event)
      })();
    
  }, "blur": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputBlur($event)
      })();
    
  }},'9-463': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event)
      })();
    
  }}}, models: {'208': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }} }, {info: {"components":{"van-search":{"path":"vant-weapp\\search\\index"}},"on":{}}, handlers: {'9-461': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event)
      })();
    
  }, "blur": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputBlur($event)
      })();
    
  }},'9-463': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event)
      })();
    
  }}}, models: {'208': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }} }, {info: {"components":{"van-search":{"path":"vant-weapp\\search\\index"}},"on":{}}, handlers: {'9-461': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event)
      })();
    
  }, "blur": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputBlur($event)
      })();
    
  }},'9-463': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event)
      })();
    
  }}}, models: {'208': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }} }, {info: {"components":{"van-search":{"path":"vant-weapp\\search\\index"}},"on":{}}, handlers: {'9-461': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event)
      })();
    
  }, "blur": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputBlur($event)
      })();
    
  }},'9-463': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event)
      })();
    
  }}}, models: {'208': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }} });