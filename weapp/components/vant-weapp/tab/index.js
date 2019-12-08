"use strict";

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  relation: {
    name: 'tabs',
    type: 'ancestor',
    linked: function linked(target) {
      this.parent = target;
    },
    unlinked: function unlinked() {
      this.parent = null;
    }
  },
  props: {
    dot: Boolean,
    info: null,
    title: String,
    disabled: Boolean,
    titleStyle: String,
    name: {
      type: [Number, String],
      value: ''
    }
  },
  data: {
    width: null,
    inited: false,
    active: false,
    animated: false
  },
  watch: {
    title: 'update',
    disabled: 'update',
    dot: 'update',
    info: 'update',
    titleStyle: 'update'
  },
  methods: {
    setComputedName: function setComputedName() {
      this.computedName = this.data.name || this.index;
    },
    getComputedName: function getComputedName() {
      if (this.data.name !== '') {
        return this.data.name;
      }

      return this.index;
    },
    update: function update() {
      if (this.parent) {
        this.parent.updateTabs();
      }
    }
  }
});