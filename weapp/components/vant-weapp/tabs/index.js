"use strict";

var _component = require('./../common/component.js');

var _touch = require('./../mixins/touch.js');

var _utils = require('./../common/utils.js');

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

(0, _component.VantComponent)({
  mixins: [_touch.touch],
  classes: ['nav-class', 'tab-class', 'tab-active-class', 'line-class'],
  relation: {
    name: 'tab',
    type: 'descendant',
    linked: function linked(child) {
      child.index = this.children.length;
      this.children.push(child);
      this.updateTabs(this.data.tabs.concat(child.data));
    },
    unlinked: function unlinked(child) {
      var index = this.children.indexOf(child);
      var tabs = this.data.tabs;
      tabs.splice(index, 1);
      this.children.splice(index, 1);
      var i = index;

      while (i >= 0 && i < this.children.length) {
        var currentChild = this.children[i];
        currentChild.index--;
        i++;
      }

      this.updateTabs(tabs);
    }
  },
  props: {
    color: {
      type: String,
      observer: 'setLine'
    },
    sticky: Boolean,
    animated: {
      type: Boolean,
      observer: 'setTrack'
    },
    swipeable: Boolean,
    lineWidth: {
      type: [String, Number],
      value: -1,
      observer: 'setLine'
    },
    lineHeight: {
      type: [String, Number],
      value: -1,
      observer: 'setLine'
    },
    active: {
      type: [String, Number],
      value: 0,
      observer: function observer(value) {
        this.currentName = value;
        this.setActiveTab();
      }
    },
    type: {
      type: String,
      value: 'line'
    },
    border: {
      type: Boolean,
      value: true
    },
    duration: {
      type: Number,
      value: 0.3
    },
    zIndex: {
      type: Number,
      value: 1
    },
    swipeThreshold: {
      type: Number,
      value: 4,
      observer: function observer() {
        this.setData({
          scrollable: this.children.length > this.data.swipeThreshold
        });
      }
    },
    offsetTop: {
      type: Number,
      value: 0
    }
  },
  data: {
    tabs: [],
    lineStyle: '',
    scrollLeft: 0,
    scrollable: false,
    trackStyle: '',
    wrapStyle: '',
    position: '',
    currentIndex: 0
  },
  beforeCreate: function beforeCreate() {
    this.children = [];
  },
  mounted: function mounted() {
    this.setLine(true);
    this.setTrack();
    this.scrollIntoView();
  },
  methods: {
    updateTabs: function updateTabs(tabs) {
      tabs = tabs || this.data.tabs;
      this.setData({
        tabs: tabs,
        scrollable: tabs.length > this.data.swipeThreshold
      });
      this.setActiveTab();
    },
    trigger: function trigger(eventName, name) {
      var _this$data = this.data,
          tabs = _this$data.tabs,
          currentIndex = _this$data.currentIndex;
      this.$emit(eventName, {
        name: name,
        title: tabs[currentIndex].title
      });
    },
    onTap: function onTap(event) {
      var index = event.currentTarget.dataset.index;
      var child = this.children[index];
      var computedName = child.getComputedName();

      if (this.data.tabs[index].disabled) {
        this.trigger('disabled', computedName);
      } else {
        this.trigger('click', computedName);
        this.setActive(computedName);
      }
    },
    setActive: function setActive(name) {
      if (name !== this.currentName) {
        this.currentName = name;
        this.trigger('change', name);
        this.setActiveTab();
      }
    },
    setLine: function setLine(skipTransition) {
      var _this = this;

      if (this.data.type !== 'line') {
        return;
      }

      var _this$data2 = this.data,
          color = _this$data2.color,
          duration = _this$data2.duration,
          currentIndex = _this$data2.currentIndex,
          lineWidth = _this$data2.lineWidth,
          lineHeight = _this$data2.lineHeight;
      this.getRect('.van-tab', true).then(function (rects) {
        var rect = rects[currentIndex];
        var width = lineWidth !== -1 ? lineWidth : rect.width / 2;
        var height = lineHeight !== -1 ? "height: ".concat((0, _utils.addUnit)(lineHeight), "; border-radius: ").concat((0, _utils.addUnit)(lineHeight), ";") : '';
        var left = rects.slice(0, currentIndex).reduce(function (prev, curr) {
          return prev + curr.width;
        }, 0);
        left += (rect.width - width) / 2;
        var transition = skipTransition ? '' : "transition-duration: ".concat(duration, "s; -webkit-transition-duration: ").concat(duration, "s;");

        _this.setData({
          lineStyle: "\n            ".concat(height, "\n            width: ").concat((0, _utils.addUnit)(width), ";\n            background-color: ").concat(color, ";\n            -webkit-transform: translateX(").concat(left, "px);\n            transform: translateX(").concat(left, "px);\n            ").concat(transition, "\n          ")
        });
      });
    },
    setTrack: function setTrack() {
      var _this2 = this;

      var _this$data3 = this.data,
          animated = _this$data3.animated,
          duration = _this$data3.duration,
          currentIndex = _this$data3.currentIndex;
      if (!animated) return '';
      this.getRect('.van-tabs__content').then(function (rect) {
        var width = rect.width;

        _this2.setData({
          trackStyle: "\n              width: ".concat(width * _this2.children.length, "px;\n              left: ").concat(-1 * currentIndex * width, "px;\n              transition: left ").concat(duration, "s;\n              display: -webkit-box;\n              display: flex;\n            ")
        });

        var data = {
          width: width,
          animated: animated
        };

        _this2.children.forEach(function (item) {
          item.setData(data);
        });
      });
    },
    setActiveTab: function setActiveTab() {
      var _this3 = this;

      if (!(0, _utils.isDef)(this.currentName)) {
        var active = this.data.active;
        var _this$children = this.children,
            children = _this$children === void 0 ? [] : _this$children;
        this.currentName = active === '' && children.length ? children[0].getComputedName() : active;
      }

      this.children.forEach(function (item, index) {
        var data = {
          active: item.getComputedName() === _this3.currentName
        };

        if (data.active) {
          _this3.setData({
            currentIndex: index
          });

          data.inited = true;
        }

        if (data.active !== item.data.active) {
          item.setData(data);
        }
      });
      (0, _utils.nextTick)(function () {
        _this3.setLine();

        _this3.setTrack();

        _this3.scrollIntoView();
      });
    },
    // scroll active tab into view
    scrollIntoView: function scrollIntoView() {
      var _this4 = this;

      var _this$data4 = this.data,
          currentIndex = _this$data4.currentIndex,
          scrollable = _this$data4.scrollable;

      if (!scrollable) {
        return;
      }

      Promise.all([this.getRect('.van-tab', true), this.getRect('.van-tabs__nav')]).then(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            tabRects = _ref2[0],
            navRect = _ref2[1];

        var tabRect = tabRects[currentIndex];
        var offsetLeft = tabRects.slice(0, currentIndex).reduce(function (prev, curr) {
          return prev + curr.width;
        }, 0);

        _this4.setData({
          scrollLeft: offsetLeft - (navRect.width - tabRect.width) / 2
        });
      });
    },
    onTouchStart: function onTouchStart(event) {
      if (!this.data.swipeable) return;
      this.touchStart(event);
    },
    onTouchMove: function onTouchMove(event) {
      if (!this.data.swipeable) return;
      this.touchMove(event);
    },
    // watch swipe touch end
    onTouchEnd: function onTouchEnd() {
      if (!this.data.swipeable) return;
      var _this$data5 = this.data,
          tabs = _this$data5.tabs,
          currentIndex = _this$data5.currentIndex;
      var direction = this.direction,
          deltaX = this.deltaX,
          offsetX = this.offsetX;
      var minSwipeDistance = 50;

      if (direction === 'horizontal' && offsetX >= minSwipeDistance) {
        if (deltaX > 0 && currentIndex !== 0) {
          var child = this.children[currentIndex - 1];
          this.setActive(child.getComputedName());
        } else if (deltaX < 0 && currentIndex !== tabs.length - 1) {
          var _child = this.children[currentIndex - 1];
          this.setActive(_child.getComputedName());
        }
      }
    }
  }
});