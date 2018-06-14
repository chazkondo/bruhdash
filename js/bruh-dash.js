var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array
  first: function (arr) {
      return arr[0];
  },

  // returns the last element of an array
  last: function (arr) {
    return arr.pop();
  },

  // returns the index of the first matching element from left to right
  indexOf: function (arr, num) {
    for(var i=0;i<arr.length;i++){
      if(arr[i] === num){
        return i;
      }
    }
    return -1;
  },

  // returns the index of the first matching element from right to left
  lastIndexOf: function (arr, num) {
    for(var i=arr.length;i>0;i--){
      if(arr[i]===num){
        return i;
      }
    }
    return -1;
  },

  // returns an array with all elements except for the last element
  initial: function (arr) {
    var newArr = [];
    for(var i=0;i<arr.length-1;i++){
      newArr.push(arr[i])
    }
    return newArr;
  },
  
  // returns an array with all falsey values removed
  compact: function(arr) {
        return arr.filter(Boolean);
      },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (arr, num1, num2) {
    return arr.slice(num1, num2);
  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(arr, n){
    if(n === undefined){
      return arr.splice(1);}
      else {return arr.splice(n)}
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(arr, n){
      if(n === undefined){
        arr.pop();
        return arr;} else{
          for(var i=0;i<n;i++){
            arr.pop();
          }
        } return arr;
  },

  // creates a slice of an array with n elements taken from the beginning
  take: function(arr, n){
    if(n === undefined){
      return arr.slice(0,1)
    }else if(n>arr.length){
      return arr
    }else{
      newArr = [];
      for (var i =0; i<n; i++){
        newArr.push(arr[i])
      }
      return newArr;
    } 
  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function(arr, n){
    if(n === undefined){
      return arr.slice(arr.length-1,arr.length)
    }else if(n>arr.length){
      return arr;
    }else{
      newArr = [];
      for(var i=arr.length-1; i>(arr.length-n-1); i--){
        newArr.unshift(arr[i]);
      }
      return newArr;
    } 
  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function(arr, num, start, end) {
    if(start === undefined || end === undefined){
      var origLength = arr.length;
      arr.splice(0, arr.length, num);
      for (var i=0;i<origLength-1;i++){
        arr.splice(0, 0, num)
      }
      return arr;
    }else{
      arr.splice(start, end-1, num);
      for (var i=0;i<end-start-1;i++){
        arr.splice(start, 0, num)
      }
      return arr;
    };
  },

  // removes all given values from an array
  pull: function (arr, remove1, remove2) {
    for(var i=0;i<arr.length;i++){
      if(arr[i] === remove1){
        arr.splice(i,1);
        console.log(arr);
      }else{}
    }
    for(var i=0;i<arr.length;i++){
      if(arr[i] === remove2){
        arr.splice(i,1);
        console.log(arr);
      }else{}
    }
    return arr;
  },

  // removes elements of an array corresponding to the given indices
  pullAt: function (arr, [pull1, pull2]) {
    var newArr = [];
    for(var i=0;i<arr.length;i++){
      if(i === pull1){
        newArr.push(arr[i]);
        console.log(arr);
      }else{}
    }
    for(var i=0;i<arr.length;i++){
      if(i === pull2){
        newArr.push(arr[i]);
        console.log(arr);
      }else{}
    }
    return newArr;
  },

  // creates an array excluding all the specified values
  without: function (arr, remove1, remove2) {
    for(var i=0;i<arr.length;i++){
      if(arr[i] === remove1){
        arr.splice(i,1);
        console.log(arr);
      }else{}
    }
    for(var i=0;i<arr.length;i++){
      if(arr[i] === remove2){
        arr.splice(i,1);
        console.log(arr);
      }else{}
    }
    return arr;
  },
  
  //   Jamie Method - 
  //   without: function(arr, [a, b]) {
  //       // console.log(arr,a,b);
  //       var newArr = []
  //       for (var i=0; i<arr.length; i++) {
  //         if (arr[i] != a && arr[i] != b) {
  //           newArr.push(arr[i]);
  //         }
  //       }
  //       return newArr;
  //     },

  // returns an array with specified values excluded

  // difference: function(arr1, arr2) {
  //       var answer = arr1.filter(f => !arr2.includes(f));
  //       return answer;
  //     },

  difference: function(arr, arr2) {
  
    //remove duplicates from arr2
  var filteredArr2 = arr2.filter(function(elem, index, self) {
      return index === self.indexOf(elem);
  });
    console.log(filteredArr2);
  
        for(var j=0;j<filteredArr2.length;j++){
          var numBeingTested = filteredArr2[j];
          for(var i=0;i<arr.length;i++){
            if(arr[i] === numBeingTested){
              arr.splice(i,1);
  
            }else {}
          }
        }
      return arr;
    },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements

  /* Uhh pretty sure this is what zip does according to lo dash

  zip: function () {
    var arr1 = [];
    var arr2 = [];
    var resultArr = [];
    for(var i=0;i<arguments.length;i++){
      arr1.push(arguments[i][0]);
      arr2.push(arguments[i][1]);
    }
    resultArr.push(arr1);
    resultArr.push(arr2);
    return resultArr;
  },

  */

/* Okay this works but it's the cheat method cuz I know how many inputs there are

 zip: function () {
  var originalArr = [];
  var resultArr = [];
  var testArr1 = [];
  var testArr2 = [];
  var testArr3 = [];
  for(var i=0;i<arguments.length;i++){
    originalArr.push(arguments[i]);
    console.log(originalArr);
  }
    for(var i=0;i<originalArr.length;i++){
      var toPush = originalArr[i].shift();
      console.log(toPush);
      testArr1.push(toPush);
      console.log(testArr1);
    }
    resultArr.push(testArr1);
    for(var i=0;i<originalArr.length;i++){
      var toPush = originalArr[i].shift();
      console.log(toPush);
      testArr2.push(toPush);
      console.log(testArr2);
    }
    resultArr.push(testArr2);
    for(var i=0;i<originalArr.length;i++){
      var toPush = originalArr[i].shift();
      console.log(toPush);
      testArr3.push(toPush);
      console.log(testArr3);
    }
    resultArr.push(testArr3);
  return resultArr;
},

*/

zip: function () {
  var originalArr = [];
  var resultArr = [];
  for(var i=0;i<arguments.length;i++){
    originalArr.push(arguments[i]);
  }
  while((originalArr[0].length)>0){
    var testArr = [];
    console.log(originalArr);
    for(var i=0;i<originalArr.length;i++){
      var toPush = originalArr[i].shift();
      console.log(toPush);
      testArr.push(toPush);
      console.log(testArr);
    }
    resultArr.push(testArr);
  }
  console.log(originalArr.length);
  return resultArr;
},

//   zip: function (arr1, arr2) {
//       console.log(arr1, arr2);
//       var newArr = [];
//       var innerArr = [];
//       for (var i=0; i<arr1.length; i++) {
//         innerArr.push(arr1[i]);
//         innerArr.push(arr2[i]);
//         newArr.push(innerArr);
//         innerArr = [];
//       }
//       return newArr;
//     },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function (arr) {
    var originalArr = [];
    var resultArr = [];
    for(var i=0;i<arr.length;i++){
      originalArr.push(arr[i]);
    }
    while((originalArr[0].length)>0){
      var testArr = [];
      console.log(originalArr);
      for(var i=0;i<originalArr.length;i++){
        var toPush = originalArr[i].shift();
        console.log(toPush);
        testArr.push(toPush);
        console.log(testArr);
      }
      resultArr.push(testArr);
    }
    console.log(originalArr.length);
    return resultArr;
  },

  // creates an array of elements into groups of length of specified size
  chunk: function(arr, num) {
    var newArr = [];
    var resultArr = [];
    if(arr.length === 0 || num === 0){
      return [];
    }else{
      for(var i=0;i<arr.length;i++){
        if(newArr.length === num){
          resultArr.push(newArr);
          newArr = [];
          newArr.push(arr[i]);
        }else{
          newArr.push(arr[i]);
        }
      }
    }
    resultArr.push(newArr);
    return resultArr;
  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects

  // forEach: function(input){
  //   var result = [];
  // if(Array.isArray(input) === true){
  // input.forEach(function(element) {
  //   console.log(element);
  //   result.push(element);
  // });}else{for(i in input){
  //   console.log(input[i]);
  //   result.push(input[i]);
  // }}
  //     return result;
  // },

  forEach: function(input, funct){
    var result = [];
  if(Array.isArray(input) === true){
  input.forEach(function(element) {
    console.log(element);
    result.push(element);
  });}else{for(i in input){
    console.log(input[i]);
    result.push(input[i]);
  }}
      return result;
  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function() {

  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/ 

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function() {

  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function() {
    
  }
};
