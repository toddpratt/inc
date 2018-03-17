import Vue from 'vue';

new Vue({
  el: "#app",
  data: {
    counter: 0
  },
  methods: {
    inc: function() {
      this.counter++;
    }
  }
});

console.log('this ran');
