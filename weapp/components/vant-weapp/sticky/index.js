"use strict";

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  props: {
    zIndex: {
      type: Number,
      value: 99
    },
    offsetTop: {
      type: Number,
      value: 0
    },
    disabled: Boolean
  },
  data: {
    wrapStyle: '',
    containerStyle: ''
  },
  methods: {
    setStyle: function setStyle() {
      var _this$data = this.data,
          offsetTop = _this$data.offsetTop,
          height = _this$data.height,
          fixed = _this$data.fixed,
          zIndex = _this$data.zIndex;

      if (fixed) {
        this.setData({
          wrapStyle: "top: ".concat(offsetTop, "px;"),
          containerStyle: "height: ".concat(height, "px; z-index: ").concat(zIndex, ";")
        });
      } else {
        this.setData({
          wrapStyle: '',
          containerStyle: ''
        });
      }
    },
    observerContentScroll: function observerContentScroll() {
      var _this = this;

      var offsetTop = this.data.offsetTop;
      var intersectionObserver = this.createIntersectionObserver({
        thresholds: [0, 1]
      });
      this.intersectionObserver = intersectionObserver;
      intersectionObserver.relativeToViewport({
        top: -offsetTop
      });
      intersectionObserver.observe('.van-sticky', function (res) {
        if (_this.data.disabled) {
          return;
        } // @ts-ignore


        var _res$boundingClientRe = res.boundingClientRect,
            top = _res$boundingClientRe.top,
            height = _res$boundingClientRe.height;
        var fixed = top <= offsetTop;

        _this.$emit('scroll', {
          scrollTop: top,
          isFixed: fixed
        });

        _this.setData({
          fixed: fixed,
          height: height
        });

        wx.nextTick(function () {
          _this.setStyle();
        });
      });
    }
  },
  mounted: function mounted() {
    this.observerContentScroll();
  },
  destroyed: function destroyed() {
    this.intersectionObserver.disconnect();
  }
});