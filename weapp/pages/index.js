"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import eventHub from '../common/eventHub'
// import testMixin from '../mixins/test'
_core["default"].page({
  data: {
    inputVal: '',
    notice: '足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。',
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
    }
  },
  methods: {
    handleInput: function handleInput(e) {
      console.log(e);
    },
    onSearch: function onSearch(e) {
      console.log(e);
    },
    handleInputChange: function handleInputChange(val) {
      this.inputVal = val;
    }
  }
}, {info: {"components":{"basesearch":{"path":"..\\components\\base-search"},"basenoticebar":{"path":"..\\components\\base-notice-bar"},"baseswiper":{"path":"..\\components\\base-swiper"}},"on":{"3-26":["inputChange"]}}, handlers: {'3-26': {"inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"basesearch":{"path":"..\\components\\base-search"},"basenoticebar":{"path":"..\\components\\base-notice-bar"},"baseswiper":{"path":"..\\components\\base-swiper"}},"on":{"3-26":["inputChange"]}}, handlers: {'3-26': {"inputChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleInputChange($event)
      })();
    
  }}}, models: {} });