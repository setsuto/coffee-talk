"use strict";

var thumbnailList = {
  "count": 3,
  "articles": [{
    "thumbnail": "./images/load-more/banner_1.jpg",
    "txt": "アルバイト募集中、未経験歓迎。コーヒーの淹れ方が学べる！アットホームな職場です",
    "date": "2021.01.03"
  }, {
    "thumbnail": "./images/load-more/banner_2.jpg",
    "txt": "ボードゲーム大会開催。優勝者には当店オリジナルタンブラーをプレゼント！",
    "date": "2021.01.02"
  }, {
    "thumbnail": "./images/load-more/banner_3.jpg",
    "txt": "毎週月曜日は300円以上購入された方に限り、クーポン券を配布致します",
    "date": "2021.01.01"
  }]
};
var loadNum = 1;
var tab = new Vue({
  el: '#app',
  data: {
    isActive: 'tab3',
    articles: [],
    hasNext: true
  },
  methods: {
    change: function change(num) {
      this.isActive = num;
    },
    load: function load() {
      var self = this;
      self.articles = self.articles.concat(thumbnailList.articles.slice(self.articles.length, self.articles.length + loadNum));

      if (self.articles.length >= thumbnailList.count) {
        self.hasNext = false;
      }
    }
  },
  mounted: function mounted() {
    this.load();
  }
});