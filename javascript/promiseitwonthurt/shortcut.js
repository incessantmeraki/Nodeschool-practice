var promise1 = new Promise(function (fulfill,reject) {
  reject("REJECTED 1")
});

promise1.catch(function (err) {
  console.log(err)
})

var promise 2 = Promise.resolve("RESOLVED 2")
promise 2 = Promise.reject("REJECTED 2")
