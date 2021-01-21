
var apiUrl = 'https://api.github.com/users/joko751214/repos'
var app = new Vue({
  el: "#app",
  data: {
    repos: '',
  },
  methods: {
    getData() {
      const xhr = new XMLHttpRequest();
      const self = this;
      xhr.open('GET', apiUrl);
      xhr.send();
      xhr.onload = function() {
        self.repos = JSON.parse(xhr.responseText);
      }
    }
  },
  created() {
    this.getData();
  },
})