/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
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

// result = {
//   insert:
//   retrieve:
//   remove:
// }

var makeHashTable = function() {
  var result = {};
  var storage = [];  //[[[k,v], [k,v]],[[k,v],[k,v]]]
  var storageLimit = 1000;

  result.insert = function(k,v) {
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


