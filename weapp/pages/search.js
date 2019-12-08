"use strict";

var _core = _interopRequireDefault(require('./../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import eventHub from '../common/eventHub'
// import testMixin from '../mixins/test'
_core["default"].page({
  data: {
    searchResultShow: false,
    inputVal: '',
    hotSearchList: ['测试', '测试', '好课哪里买', '测试', '好课哪里买', '好课哪里买', '好课哪里买', '好课哪里买', '好课哪里买', '测试', '测试', '测试', '测试', '测试', '测试', '测试'],
    searchResultList: null
  },
  methods: {
    // 处理(base-search组件传回来的)搜索值
    handleInputChange: function handleInputChange(val) {
      if (!val) {
        this.inputVal = '';
        this.handleResultHide();
      }

      this.inputVal = val;
    },
    // 处理热搜点击
    handleHotSearchClick: function handleHotSearchClick(val) {
      this.inputVal = val;
    },
    // 隐藏掉搜索结果栏
    handleResultHide: function handleResultHide() {
      // 清空搜索结果列表
      this.searchResultList = null;
      this.searchResultShow = false;
    },
    // 处理(base-search组件传回来的)搜索数据
    handleSearchData: function handleSearchData(data) {
      if (data.length > 0) this.searchResultList = data;
      this.searchResultShow = true;
    }
  }
}, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"basesearch":{"path":"../components/base-search"},"hotsearch":{"path":"../components/hot-search"},"searchresult":{"path":"../components/search-result"}},"on":{"5-0":["handleResultHide","handleSearchData","inputChange"],"5-3":["hotSearchClick"]}}, handlers: {'5-0': {"handleResultHide": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleResultHide($event);
      })();
    
  }, "handleSearchData": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchData($event);
      })();
    
  }, "inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event);
      })();
    
  }},'5-3': {"hotSearchClick": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleHotSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined });