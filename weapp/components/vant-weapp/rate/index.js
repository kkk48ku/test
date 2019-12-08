"use strict";

var _component = require('./../common/component.js');

var _utils = require('./../common/utils.js');

(0, _component.VantComponent)({
  field: true,
  classes: ['icon-class'],
  props: {
    value: Number,
    readonly: Boolean,
    disabled: Boolean,
    allowHalf: Boolean,
    size: {
      type: null,
      observer: 'setSizeWithUnit'
    },
    icon: {
      type: String,
      value: 'star'
    },
    voidIcon: {
      type: String,
      value: 'star-o'
    },
    color: {
      type: String,
      value: '#ffd21e'
    },
    voidColor: {
      type: String,
      value: '#c7c7c7'
    },
    disabledColor: {
      type: String,
      value: '#bdbdbd'
    },
    count: {
      type: Number,
      value: 5
    },
    gutter: {
      type: null,
      observer: 'setGutterWithUnit'
    },
    touchable: {
      type: Boolean,
      value: true
    }
  },
  data: {
    innerValue: 0,
    gutterWithUnit: undefined,
    sizeWithUnit: '20px'
  },
  watch: {
    value: function value(_value) {
      if (_value !== this.data.innerValue) {
        this.setData({
          innerValue: _value
        });
      }
    }
  },
  methods: {
    setSizeWithUnit: function setSizeWithUnit(val) {
      this.setData({
        sizeWithUnit: (0, _utils.addUnit)(val)
      });
    },
    setGutterWithUnit: function setGutterWithUnit(val) {
      this.setData({
        gutterWithUnit: (0, _utils.addUnit)(val)
      });
    },
    onSelect: function onSelect(event) {
      var data = this.data;
      var score = event.currentTarget.dataset.score;

      if (!data.disabled && !data.readonly) {
        this.setData({
          innerValue: score + 1
        });
        this.$emit('input', score + 1);
        this.$emit('change', score + 1);
      }
    },
    onTouchMove: function onTouchMove(event) {
      var _this = this;

      var touchable = this.data.touchable;
      if (!touchable) return;
      var clientX = event.touches[0].clientX;
      this.getRect('.van-rate__icon', true).then(function (list) {
        var target = list.sort(function (item) {
          return item.right - item.left;
        }).find(function (item) {
          return clientX >= item.left && clientX <= item.right;
        });

        if (target != null) {
          _this.onSelect(Object.assign(Object.assign({}, event), {
            currentTarget: target
          }));
        }
      });
    }
  }
});