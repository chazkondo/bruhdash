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
    if (!arr) return null;
    return arr[0];
  },

  // returns the last element of an array
  last: function (arr) {
    if (!arr) return null;
    return arr[arr.length - 1];
  },

  // returns the index of the first matching element from left to right
  indexOf: function (arr, m) {
    if (!arr) return null;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === m) return i;
    }
    return -1;
  },

  // returns the index of the first matching element from right to left
  lastIndexOf: function (arr, m) {
    if (!arr) return null;
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === m) return i;
    }
    return -1;
  },

  // returns an array with all elements except for the last element
  initial: function (arr) {
    if (!arr) return null;
    arr.pop();
    return arr;
  },

  // returns an array with all falsey values removed
  compact: function (arr) {
    let i = 0;
    while (i < arr.length) {
      if (!arr[i]) {
        arr.splice(i, 1);
      } else {
        i++;
      }
    }
    return arr;
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (arr, s, e) {
    let newArr = [];
    for (let i = s; i < e; i++) {
      newArr.push(arr[i]);
    }
    return newArr;
  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function (arr, n = 1) {
    while (n > 0) {
      arr.shift();
      n--;
    }
    return arr;
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function (arr, n = 1) {
    while (n > 0) {
      arr.pop();
      n--;
    }
    return arr;
  },

  // creates a slice of an array with n elements taken from the beginning
  take: function (arr, n) {
    if (n === undefined) return [arr[0]];
    let m = arr.length - n;
    while (m > 0) {
      arr.pop();
      m--;
    }
    return arr;
  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function (arr, n) {
    if (n === undefined) return [arr[arr.length - 1]];
    let m = arr.length - n;
    while (m > 0) {
      arr.shift();
      m--;
    }
    return arr;
  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function (arr, val, x = 0, y = arr.length) {
    for (let i = x; i < y; i++) {
      arr[i] = val;
    }
    return arr;
  },

  // removes all given values from an array
  pull: function (arr) {
    const set = new Set();
    for (let i = 1; i < arguments.length; i++) {
      set.add(arguments[i]);
    }
    let i = 0;
    while (i < arr.length) {
      if (set.has(arr[i])) {
        arr.splice(i, 1);
      } else {
        i++;
      }
    }
    return arr;
  },

  // removes elements of an array corresponding to the given indices
  pullAt: function (arr, x) {
    const newArr = [];
    for (let i = 0; i < x.length; i++) {
      newArr.push(arr[x[i]]);
    }
    return newArr;
  },

  // creates an array excluding all the specified values
  without: function (arr) {
    const set = new Set();
    for (let i = 1; i < arguments.length; i++) {
      set.add(arguments[i]);
    }
    let i = 0;
    while (i < arr.length) {
      if (set.has(arr[i])) {
        arr.splice(i, 1);
      } else {
        i++;
      }
    }
    return arr;
  },

  // returns an array with specified values excluded
  difference: function (arr1, arr2) {
    const diff = [];
    const set = new Set();
    for (const num of arr2) {
      set.add(num);
    }
    for (const num of arr1) {
      if (!set.has(num)) diff.push(num);
    }
    return diff;
  },

  /*******************
   *  STRETCH GOALS! *
   *******************/

  // creates an array of grouped elements
  zip: function () {
    const ans = [];
    for (let i = 0; i < arguments[0].length; i++) {
      const elem = [];
      for (let j = 0; j < arguments.length; j++) {
        elem.push(arguments[j][i]);
      }
      ans.push(elem);
    }
    return ans;
  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function (arr) {
    const ans = [];
    for (let i = 0; i < arr[0].length; i++) {
      // runs twice
      const elem = [];
      for (let j = 0; j < arr.length; j++) {
        // runs three times
        elem.push(arr[j][i]);
      }
      ans.push(elem);
    }
    return ans;
  },

  // creates an array of elements into groups of length of specified size
  chunk: function (arr, size) {
    if (size === 0) return [];
    if (!arr.length) return arr;

    let i = 0;
    let j = 0;
    const ans = [];
    let temp = [];
    while (i < arr.length + 1) {
      if (j === size || i === arr.length) {
        ans.push(temp);
        j = 0;
        temp = [];
      }
      temp.push(arr[i]);
      j++;
      i++;
    }
    return ans;
  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function (obj, f) {
    for (const i in obj) {
      f(obj[i]);
    }
  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function (obj, f) {
    const arr = [];
    for (const i in obj) {
      arr.push(f(obj[i]));
    }
    return arr;
  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function (obj, f) {
    const arr = [];
    for (const i in obj) {
      if (f(obj[i])) {
        arr.push(obj[i]);
      }
    }
    return arr;
  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function (obj, f) {
    let init = 0;
    for (const i in obj) {
      init += f(0, obj[i]);
    }
    return init;
  },
};
