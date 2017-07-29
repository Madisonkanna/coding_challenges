/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;
  
  result.insert = function(k,v) {
    // TODO: implement `insert`
    if(storage.length >= 3/4*storageLimit){
      storageLimit=storageLimit*2;
    }
    if(storage.length <= 1/4*storageLimit){
      storageLimit=storageLimit/2;
    }
    var index = getIndexBelowMaxForKey(k,storageLimit);
    
    if (!storage[index]) {
      var newBucket = [];
      storage[index] = newBucket;
    }
    
    if (storage[index].length > 0) {
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === k) {
          storage[index][i][1] = v;
        }
      }

    }
    storage[index].push([k,v]);

  };

  result.retrieve = function(k) {
    // TODO: implement `retrieve`
    var index = getIndexBelowMaxForKey(k, storageLimit);
    
    if (storage[index].length > 0) {
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === k) {
          return storage[index][i][1];
        }
      }
    }
    return null;


  };

  result.remove = function(k) {
    // TODO: implement `remove`
    var index = getIndexBelowMaxForKey(k, storageLimit);
    var result;
    if (storage[index].length > 0) {
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === k) {
          result = storage[index][i][1];
          storage[index][i][0] = undefined;
        }
      }
    }
    return result;

  };

  return result;
};
