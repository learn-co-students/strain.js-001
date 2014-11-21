'use strict';

var strain = {

  strainer: function(array, filter, keepMatches) {
    var results = [];
    for (var i=0; i < array.length; i++) {
      var item = array[i];
      if (filter(item) === keepMatches) {
        results.push(item);
      }
    }
    return results;
  },

  keep: function (array, filter) {
    return this.strainer(array, filter, true);
  },

  discard: function (array, filter) {
    return this.strainer(array, filter, false);
  }
}