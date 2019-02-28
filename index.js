fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (Array.isArray(collection)){
        collection.forEach(el => {
          callback(el, collection)
        })
      } else if (typeof collection === "object"){
          Object.values(collection).forEach(el => {
            callback(el, collection)
          })
        }
      return collection
    },

    map: function(collection, callback) {
      let updatedCollection= []
      if (Array.isArray(collection)){
         collection.forEach(el => {
           updatedCollection.push(callback(el, collection))
         })
      } else if (typeof collection === "object"){
          Object.values(collection).forEach(el => {
            updatedCollection.push(callback(el, collection))
          })
        }
      return updatedCollection
    },

    reduce: function(collection, callback, acc) {
      if (!!acc){
        collection.forEach(el => {
          acc = callback(acc, el, collection)
        })
        return acc
      } else {
        var acc = 0;
        collection.forEach(el =>{
          acc = callback(acc, el, collection)
        })
        return acc
      }
    },

    find: function(collection, predicate) {
        for (let i = 0; i < collection.length; i++){
          if(predicate(collection[i])){
            return collection[i]
          }
        }
      },

    filter: function(collection, predicate) {
      let newArr = []
      // for (let  i = 0; i < collection.length; i++){
        collection.forEach(el => {
          if (predicate(el)){
          newArr.push(el)
        }
      })
      return newArr
    },


    size: function(collection) {
      length = 0;
      for(var el in collection){
        length ++;
      }
      return length;
    },


    first: function(array, n){
      if (!!n){
        return array.slice(0,n)
      }
      else if (!n){
        return array[0]
      }
    },

    last: function(array, n){
    if (!!n){
      return array.slice(-n)
    }
    else if (!n){
      return array[array.length-1]
    }
  },


  compact: function(array){
    return array.filter(el => !!el)
  },

  sortBy: function(array, callback){
    // for (let i = 0; i < array.length; i++) {
    //   n = i+1
      return array.sort(function(callback(a), callback(b)) {return callback(b) - callback(a)}
    // return array
  },

  // sortBy: function(array, callback){
  //   var newObj = {}
  //   array.forEach(el => {
  //     newObj.el = callback(el) //callback value
  //   })
  //   (for var obj in newObj){
  //     newObj.sort(obj)
  //   }
  //     var newArr = []
  //     newArr.push(Object.keys(newObj))
  //     return newArr
  // },

  //
  // sortBy: function(array, callback){
  //     var newArr = array.forEach(el => {
  //     callback(el)
  //   })
  //   return newArr.sort()
  // },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
