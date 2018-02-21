import Vue from 'vue';
import jsonArray from '../data/test.json'

let jsonStr = JSON.stringify(jsonArray);
let dataArray = JSON.parse(jsonStr);

new Vue({
  el: "#app",
  data: {
    array: dataArray
  },
  computed: {
    filteredUsers: function () {

    }
  }
});
