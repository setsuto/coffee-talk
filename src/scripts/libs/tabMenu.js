new Vue({
  el: '#tabMenu',
  data: {
    isActive: 'tab1',
  },
  methods: {
    change(num) {
      this.isActive = num;
    },
  },
});
