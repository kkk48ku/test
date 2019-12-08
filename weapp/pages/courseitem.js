"use strict";

var _core = _interopRequireDefault(require('./../vendor.js')(0));

var _toast = _interopRequireDefault(require('./../components/vant-weapp/toast/toast.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  methods: {
    handleTeacherClick: function handleTeacherClick() {
      this.$navigate({
        url: 'teacheritem'
      });
    },
    handlePurchase: function handlePurchase() {
      _toast["default"].fail({
        selector: '#toast',
        message: '暂未接入微信支付功能！'
      });
    },
    handleCommentClick: function handleCommentClick() {
      this.$navigate({
        url: 'comment'
      });
    },
    handleCollectClick: function handleCollectClick() {
      _toast["default"].success({
        selector: '#toast',
        message: '收藏成功，请到个人中心-我的收藏查看！'
      });
    }
  }
}, {info: {"components":{"van-tab":{"path":"../components/vant-weapp/tab/index"},"van-tabs":{"path":"../components/vant-weapp/tabs/index"},"van-rate":{"path":"../components/vant-weapp/rate/index"},"van-tag":{"path":"../components/vant-weapp/tag/index"},"van-icon":{"path":"../components/vant-weapp/icon/index"},"van-goods-action":{"path":"../components/vant-weapp/goods-action/index"},"van-goods-action-icon":{"path":"../components/vant-weapp/goods-action-icon/index"},"van-goods-action-button":{"path":"../components/vant-weapp/goods-action-button/index"},"van-toast":{"path":"../components/vant-weapp/toast/index"}},"on":{"49-131":["tap"],"49-132":["tap"],"49-133":["tap"]}}, handlers: {'49-130': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleTeacherClick($event);
      })();
    
  }},'49-131': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCommentClick($event);
      })();
    
  }},'49-132': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCollectClick($event);
      })();
    
  }},'49-133': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handlePurchase($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tab":{"path":"../components/vant-weapp/tab/index"},"van-tabs":{"path":"../components/vant-weapp/tabs/index"},"van-rate":{"path":"../components/vant-weapp/rate/index"},"van-tag":{"path":"../components/vant-weapp/tag/index"},"van-icon":{"path":"../components/vant-weapp/icon/index"},"van-goods-action":{"path":"../components/vant-weapp/goods-action/index"},"van-goods-action-icon":{"path":"../components/vant-weapp/goods-action-icon/index"},"van-goods-action-button":{"path":"../components/vant-weapp/goods-action-button/index"},"van-toast":{"path":"../components/vant-weapp/toast/index"}},"on":{"49-131":["tap"],"49-132":["tap"],"49-133":["tap"]}}, handlers: {'49-130': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleTeacherClick($event);
      })();
    
  }},'49-131': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCommentClick($event);
      })();
    
  }},'49-132': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCollectClick($event);
      })();
    
  }},'49-133': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handlePurchase($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tab":{"path":"../components/vant-weapp/tab/index"},"van-tabs":{"path":"../components/vant-weapp/tabs/index"},"van-rate":{"path":"../components/vant-weapp/rate/index"},"van-tag":{"path":"../components/vant-weapp/tag/index"},"van-icon":{"path":"../components/vant-weapp/icon/index"},"van-goods-action":{"path":"../components/vant-weapp/goods-action/index"},"van-goods-action-icon":{"path":"../components/vant-weapp/goods-action-icon/index"},"van-goods-action-button":{"path":"../components/vant-weapp/goods-action-button/index"},"van-toast":{"path":"../components/vant-weapp/toast/index"}},"on":{"49-131":["tap"],"49-132":["tap"],"49-133":["tap"]}}, handlers: {'49-130': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleTeacherClick($event);
      })();
    
  }},'49-131': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCommentClick($event);
      })();
    
  }},'49-132': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCollectClick($event);
      })();
    
  }},'49-133': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handlePurchase($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tab":{"path":"../components/vant-weapp/tab/index"},"van-tabs":{"path":"../components/vant-weapp/tabs/index"},"van-rate":{"path":"../components/vant-weapp/rate/index"},"van-tag":{"path":"../components/vant-weapp/tag/index"},"van-icon":{"path":"../components/vant-weapp/icon/index"},"van-goods-action":{"path":"../components/vant-weapp/goods-action/index"},"van-goods-action-icon":{"path":"../components/vant-weapp/goods-action-icon/index"},"van-goods-action-button":{"path":"../components/vant-weapp/goods-action-button/index"},"van-toast":{"path":"../components/vant-weapp/toast/index"}},"on":{"49-131":["tap"],"49-132":["tap"],"49-133":["tap"]}}, handlers: {'49-130': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleTeacherClick($event);
      })();
    
  }},'49-131': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCommentClick($event);
      })();
    
  }},'49-132': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCollectClick($event);
      })();
    
  }},'49-133': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handlePurchase($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-tab":{"path":"../components/vant-weapp/tab/index"},"van-tabs":{"path":"../components/vant-weapp/tabs/index"},"van-rate":{"path":"../components/vant-weapp/rate/index"},"van-tag":{"path":"../components/vant-weapp/tag/index"},"van-icon":{"path":"../components/vant-weapp/icon/index"},"van-goods-action":{"path":"../components/vant-weapp/goods-action/index"},"van-goods-action-icon":{"path":"../components/vant-weapp/goods-action-icon/index"},"van-goods-action-button":{"path":"../components/vant-weapp/goods-action-button/index"},"van-toast":{"path":"../components/vant-weapp/toast/index"}},"on":{"49-131":["tap"],"49-132":["tap"],"49-133":["tap"]}}, handlers: {'49-130': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleTeacherClick($event);
      })();
    
  }},'49-131': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCommentClick($event);
      })();
    
  }},'49-132': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCollectClick($event);
      })();
    
  }},'49-133': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handlePurchase($event);
      })();
    
  }}}, models: {}, refs: undefined });