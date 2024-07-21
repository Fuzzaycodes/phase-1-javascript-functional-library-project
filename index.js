
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          callback(collection[key]);
        }
      }
    }
    return collection;
  }
  
  
  function myMap(collection, callback) {
    const result = [];
    myEach(collection, function(value) {
      result.push(callback(value));
    });
    return result;
  }
  
  function myReduce(collection, callback, initialValue) {
    let accumulator = initialValue === undefined ? (Array.isArray(collection) ? collection[0] : Object.values(collection)[0]) : initialValue;
    let startIndex = initialValue === undefined ? (Array.isArray(collection) ? 1 : 1) : 0;
    let values = Array.isArray(collection) ? collection : Object.values(collection);
  
    for (let i = startIndex; i < values.length; i++) {
      accumulator = callback(accumulator, values[i], collection);
    }
    return accumulator;
  }
  

  function myFind(collection, predicate) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        return collection[i];
      }
    }
    return undefined;
  }
  
  
  function myFilter(collection, predicate) {
    const result = [];
    myEach(collection, function(value) {
      if (predicate(value)) {
        result.push(value);
      }
    });
    return result;
  }
  

  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }
  
  
  function myFirst(array, n) {
    if (n === undefined) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  }
  
  
  function myLast(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    } else {
      return array.slice(-n);
    }
  }
  
  
  function myKeys(obj) {
    const keys = [];
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        keys.push(key);
      }
    }
    return keys;
  }
  
  
  function myValues(obj) {
    const values = [];
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        values.push(obj[key]);
      }
    }
    return values;
  }
  