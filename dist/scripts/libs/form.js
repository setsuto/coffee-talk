"use strict";

Vue.component('errors', {
  props: ['errors'],
  template: "\n    <div class=\"errors\" v-if=\"errors\">\n      <div class=\"error\" v-for=\"error in errors\">{{ error }}</div>\n    </div>\n  "
});
var contact = new Vue({
  el: '#app',
  data: {
    name: '',
    email: '',
    interests: [''],
    interestsMaxCount: 3,
    errors: {
      name: [],
      email: [],
      interests: []
    }
  },
  methods: {
    addInterests: function addInterests() {
      this.interests.push('');
    },
    removeInterests: function removeInterests(index) {
      this.interests.splice(index, 1);
    },
    validEmail: function validEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validate: function validate() {
      var errors = {
        name: [],
        email: [],
        interests: []
      };

      if (!this.name) {
        errors.name.push('必須項目が入力されていません');
      } else if (this.name.length > 20) {
        errors.name.push('20文字以内で入力してください。');
      }

      if (!this.email) {
        errors.email.push('メールアドレスが入力されていません。');
      } else if (!this.validEmail(this.email)) {
        errors.email.push('メールアドレスが正しくありません。');
      }

      if (this.interests.length <= 1 && !this.interests[0]) {
        errors.interests.push('必須項目が入力されていません');
      }

      this.errors = errors;
    }
  },
  computed: {
    canAddInterests: function canAddInterests() {
      return this.interests.length < this.interestsMaxCount;
    },
    canRemoveInterests: function canRemoveInterests() {
      return this.interests.length > 1;
    }
  }
});