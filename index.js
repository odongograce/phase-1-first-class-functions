function receivesAFunction(callback) {
  return callback();
}


function returnsANamedFunction() {
  function fn() {
    return " ";
  }
  return fn;
}

function returnsAnAnonymousFunction() {
  return function() {
    return " ";
  };
}
console.log(receivesAFunction());
console.log(returnsANamedFunction());
console.log(returnsAnAnonymousFunction());
