"use strict";

new Vue({
  el: '#tabMenu',
  data: {
    isActive: 'tab1'
  },
  methods: {
    change: function change(num) {
      this.isActive = num;
    }
  }
});