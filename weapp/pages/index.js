"use strict";

var _core = _interopRequireDefault(require('./../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import eventHub from '../common/eventHub'
// import testMixin from '../mixins/test'
_core["default"].page({
  data: {
    notice: '全部课程打五折~~~',
    swipersetting: {
      swiperGroup: [{
        id: 1
      }, {
        id: 2
      }, {
        id: 3
      }],
      indicatorDots: true,
      indicatorColor: '#ccc',
      indicatorActiveColor: '#fff',
      autoplay: true,
      interval: 2000,
      duration: 500,
      circular: true
    },
    imageURL: 'https://tva1.sinaimg.cn/large/006tNbRwgy1g9knjrijc3j30u00vj0tc.jpg'
  },
  methods: {
    // 点击搜索框跳转搜索界面
    handleSearchClick: function handleSearchClick() {
      this.$navigate({
        url: 'search'
      });
    }
  }
}, {info: {"components":{"baseswiper":{"path":"../components/base-swiper"},"basenoticebar":{"path":"../components/base-notice-bar"},"basenav":{"path":"../components/base-nav"},"basegoods":{"path":"../components/base-goods"}},"on":{}}, handlers: {'2-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"baseswiper":{"path":"../components/base-swiper"},"basenoticebar":{"path":"../components/base-notice-bar"},"basenav":{"path":"../components/base-nav"},"basegoods":{"path":"../components/base-goods"}},"on":{}}, handlers: {'2-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"baseswiper":{"path":"../components/base-swiper"},"basenoticebar":{"path":"../components/base-notice-bar"},"basenav":{"path":"../components/base-nav"},"basegoods":{"path":"../components/base-goods"}},"on":{}}, handlers: {'2-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"baseswiper":{"path":"../components/base-swiper"},"basenoticebar":{"path":"../components/base-notice-bar"},"basenav":{"path":"../components/base-nav"},"basegoods":{"path":"../components/base-goods"}},"on":{}}, handlers: {'2-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"baseswiper":{"path":"../components/base-swiper"},"basenoticebar":{"path":"../components/base-notice-bar"},"basenav":{"path":"../components/base-nav"},"basegoods":{"path":"../components/base-goods"}},"on":{}}, handlers: {'2-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleSearchClick($event);
      })();
    
  }}}, models: {}, refs: undefined });