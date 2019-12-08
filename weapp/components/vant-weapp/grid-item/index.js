"use strict";

var _link = require('./../mixins/link.js');

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  relation: {
    name: 'grid',
    type: 'ancestor',
    linked: function linked(parent) {
      this.parent = parent;
    }
  },
  mixins: [_link.link],
  props: {
    icon: String,
    dot: Boolean,
    info: null,
    text: String,
    useSlot: Boolean
  },
  mounted: function mounted() {
    this.updateStyle();
  },
  methods: {
    updateStyle: function updateStyle() {
      if (!this.parent) {
        return;
      }

      var _this$parent = this.parent,
          data = _this$parent.data,
          children = _this$parent.children;
      var columnNum = data.columnNum,
          border = data.border,
          square = data.square,
          gutter = data.gutter,
          clickable = data.clickable,
          center = data.center;
      var width = "".concat(100 / columnNum, "%");
      var styleWrapper = [];
      styleWrapper.push("width: ".concat(width));

      if (square) {
        styleWrapper.push("padding-top: ".concat(width));
      }

      if (gutter) {
        styleWrapper.push("padding-right: ".concat(gutter, "px"));
        var index = children.indexOf(this);

        if (index >= columnNum) {
          styleWrapper.push("margin-top: ".concat(gutter, "px"));
        }
      }

      this.setData({
        style: styleWrapper.join('; '),
        center: center,
        border: border,
        square: square,
        gutter: gutter,
        clickable: clickable
      });
    },
    onClick: function onClick() {
      this.$emit('click');
      this.jumpLink();
    }
  }
});