import Vue from 'vue';
import jsonArray from '../data/test.json'
import '../sass/main.sass'

let jsonStr = JSON.stringify(jsonArray);
let dataArray = JSON.parse(jsonStr);

new Vue({
  el: "#app",
  data: {
    array: dataArray,
    keysArray: ['id', 'name', 'location', 'currency'],
    user_message: {
      id: '',
      name: '',
      location: '',
      currency: ''
    },
    arrayOfSearchingLetters: []
  },
  computed: {
    filteredSearching: function() {
      return this.array.filter((user) => {
        var tableData = user.name.toLowerCase();
        var searchingData = this.user_message.name.toLowerCase();
        return tableData.match(searchingData);
      });
    }
  }
});
