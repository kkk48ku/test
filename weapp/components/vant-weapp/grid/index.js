"use strict";

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  relation: {
    name: 'grid-item',
    type: 'descendant',
    linked: function linked(child) {
      this.children.push(child);
    },
    unlinked: function unlinked(child) {
      this.children = this.children.filter(function (item) {
        return item !== child;
      });
    }
  },
  props: {
    square: {
      type: Boolean,
      observer: 'updateChildren'
    },
    gutter: {
      type: [Number, String],
      value: 0,
      observer: 'updateChildren'
    },
    clickable: {
      type: Boolean,
      observer: 'updateChildren'
    },
    columnNum: {
      type: Number,
      value: 4,
      observer: 'updateChildren'
    },
    center: {
      type: Boolean,
      value: true,
      observer: 'updateChildren'
    },
    border: {
      type: Boolean,
      value: true,
      observer: 'updateChildren'
    }
  },
  beforeCreate: function beforeCreate() {
    this.children = [];
  },
  created: function created() {
    var gutter = this.data.gutter;

    if (gutter) {
      this.setData({
        style: "padding-left: ".concat(gutter, "px")
      });
    }
  },
  methods: {
    updateChildren: function updateChildren() {
      this.children.forEach(function (child) {
        child.updateStyle();
      });
    }
  }
});