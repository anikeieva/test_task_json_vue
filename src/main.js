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
    filteredArray: dataArray,
  },
  methods: {
    filter: function(e) {
      let result = this.array.filter(user => {
        const key = e.target.id;
        let tableData;
        let searchingData;
        if (typeof user[key] == "number") {
          tableData = user[key].toString();
          searchingData = this.user_message[key].toString();
        } else {
          tableData = user[key].toLowerCase();
          searchingData = this.user_message[key].toLowerCase();
        }
        return tableData.match(searchingData);
      });
      this.filteredArray = result;
      return result;
    }
  },
  computed: {
    totalCurrency: function() {
      let resultSum = 0;
      this.filteredArray.filter(user => {
        resultSum += parseInt(user.currency);
      });
      return resultSum;
    }
  }
});
