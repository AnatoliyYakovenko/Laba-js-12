Array.prototype.pow = function (n) {
  return this.map(function (el) {
    return Math.pow(el, n);
  });
};

Function.prototype.defer = function (ms) {
  let func = this;
  return function () {
    setTimeout(func, ms);
  };
};

let arr = [1, 2, 3];
console.log(arr.pow(2));

function a() {
  alert("Async test");
}
a.defer(1000)();
