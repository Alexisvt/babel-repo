'use strict';

var greeting = 'Hi';
console.log('-- ' + greeting + ' David');
"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var greeting = 'Hi';
var sampleObj = {
  foo: "Alexis",
  bar: function bar() {
    return 1;
  }
};

var newSampleObj = _extends({}, sampleObj);

console.log("-- " + greeting + " Alexis");
console.log(newSampleObj.foo);

//# sourceMappingURL=bundle.js.map