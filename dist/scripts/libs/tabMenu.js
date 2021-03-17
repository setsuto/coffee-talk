"use strict";

// const tabLabels = document.querySelectorAll('.tab__label li button');
// const tabContents = document.querySelectorAll('.tab__content');
// tabLabels.forEach(function (clickedLabel) {
//   clickedLabel.addEventListener('click', function (e) {
//     e.preventDefault();
//     tabLabels.forEach(function (label) {
//       label.classList.remove('active');
//     });
//     clickedLabel.classList.add('active');
//     tabContents.forEach(function (content) {
//       content.classList.remove('active');
//     });
//     document.getElementById(clickedLabel.dataset.id).classList.add('active');
//   });
// });
new Vue({
  el: '#tabMenu',
  data: {
    isActive: 'topic1'
  },
  methods: {
    change: function change(num) {
      this.isActive = num;
    }
  }
});
