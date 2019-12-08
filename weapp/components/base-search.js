"use strict";

var _core = _interopRequireDefault(require('./../vendor.js')(0));

var _util = require('./../utils/util.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].component({
  props: {
    label: String,
    inputVal: String,
    actionBtn: String,
    searchResultList: Array
  },
  watch: {
    loading: function loading(val) {// console.log(val)
    },
    inputVal: function inputVal(val, oldVal) {
      if (val === '') {
        this.$emit('handleResultHide');
      } else if (val !== oldVal) {
        this.debounceHandleInputValChange();
      }
    }
  },
  created: function created() {
    this.debounceHandleInputValChange = (0, _util.debounce)(this.searchAjax, 300);
  },
  data: {
    loading: false
  },
  methods: {
    // 处理输入事件实现双向绑定
    handleInputChange: function handleInputChange(e) {
      var val = e.$wx.detail.value;
      this.inputVal = val;
      this.$emit('inputChange', val);
    },
    // 处理点击搜索按钮函数
    handleSearchBtnClick: function handleSearchBtnClick(e) {
      (0, _util.debounce)(this.searchAjax, 300);
    },
    // 处理点击清除按钮函数
    handleCloseClick: function handleCloseClick() {
      this.$emit('inputChange', '');
    },
    // 发送异步搜索函数
    searchAjax: function searchAjax() {
      var _this = this;

      if (!this.inputVal) return;
      console.log('搜索'); // const data = [
      //   {
      //     id: 1,
      //     content: '猫和老鼠'
      //   },
      //   {
      //     id: 2,
      //     content: '猫和老鼠'
      //   },
      //   {
      //     id: 3,
      //     content: '猫和老鼠'
      //   },
      //   {
      //     id: 4,
      //     content: '猫和老鼠'
      //   },
      //   {
      //     id: 5,
      //     content: '猫和老鼠'
      //   },
      //   {
      //     id: 6,
      //     content: '猫和老鼠'
      //   }
      // ]

      var data = [];

      if (!this.loading) {
        this.loading = true;
        setTimeout(function () {
          _this.loading = false;

          _this.handleSearchData(data);
        }, 2000);
      }
    },
    // 处理搜索结果函数
    handleSearchData: function handleSearchData(data) {
      this.$emit('handleSearchData', data);
    }
  }
}, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"van-search":{"path":"vant-weapp/search/index"},"van-icon":{"path":"vant-weapp/icon/index"},"baseloading":{"path":"base-loading"}},"on":{}}, handlers: {'10-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'10-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchBtnClick($event);
      })();
    
  }},'10-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseClick($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputVal = $v;
      
    }
    }}, refs: undefined });