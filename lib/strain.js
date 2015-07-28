'use strict';

var strain = {
  keep: function(arr, callback){
    var reArr = []
    arr.forEach(function(x){
      if(callback(x)){
        reArr.push(x)
      }
    })
    return reArr
  },
  discard: function(arr, callback){
    var reArr = []
    arr.forEach(function(x){
      if(!callback(x)){
        reArr.push(x)
      }
    })
    return reArr
  }
};
