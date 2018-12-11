!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["Weight.js"]=e():t["Weight.js"]=e()}("undefined"!=typeof self?self:this,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.r(e);
/** 
 * Imperial mass unit.
 *
 * @author Tyler Vigario (MeekLogic)
 * @license MIT
 * @version 1.3.0 
 */
var o=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.weight=this.getValue(e)}var e,n,o;return e=t,(n=[{key:"toFixed",value:function(t){return this.weight.toFixed(t)}},{key:"add",value:function(t){return this.weight+=this.getValue(t),this}},{key:"subtract",value:function(t){return this.weight-=this.getValue(t),this}},{key:"isSame",value:function(t){return this.weight===this.getValue(t)}},{key:"isNotSame",value:function(t){return this.weight!==this.getValue(t)}},{key:"isHeavier",value:function(t){return this.weight>this.getValue(t)}},{key:"isLighter",value:function(t){return this.weight<this.getValue(t)}},{key:"value",get:function(){return this.weight},set:function(t){if(t=this.getValue(t),!1===pounds)throw"Parameter passed to constructor is not a valid weight.";this.weight=t}}])&&r(e.prototype,n),o&&r(e,o),t}();function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}
/** 
 * Pound mass unit.
 *
 * @author Tyler Vigario (MeekLogic)
 * @license MIT
 * @version 1.3.0 
 */var l=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),f(this,a(e).apply(this,arguments))}var n,r,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(e,o),n=e,i=[{key:"parse",value:function(t){var e=d.parse(t);return!1!==e&&e.toPounds()}}],(r=[{key:"getValue",value:function(t){if(t instanceof d)return t.toPounds().value;if(t instanceof e)return t.value;if("number"==typeof t)return t;if(t=parseFloat(t),isNaN(t))throw"Invalid parameter passed to function.";return t}},{key:"toOunces",value:function(){return new d(16*this.weight)}},{key:"toString",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return this.toOunces().toString(t)}}])&&u(n.prototype,r),i&&u(n,i),e}();function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function y(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}
/** 
 * Ounce mass unit.
 *
 * @author Tyler Vigario (MeekLogic)
 * @license MIT
 * @version 1.3.0 
 */var d=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),y(this,h(e).apply(this,arguments))}var n,r,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(e,o),n=e,i=[{key:"parse",value:function(t){return!1===isNaN(t)?new this(t):("object"===s(t)&&"function"==typeof t.toString&&(t=t.toString()),"string"==typeof t&&(0===(t=t.trim()).length?new this(0):-1!==(t=(t=t.toLowerCase()).replace(/ +/g," ")).indexOf(",")?2===(t=t.split(",")).length&&new l(t[0]).toOunces().add(t[1]):-1!==t.indexOf(" ")?2===(t=t.split(" ")).length&&new l(t[0]).toOunces().add(t[1]):-1!==t.indexOf("lb")?new l(t).toOunces():new e(t)))}}],(r=[{key:"getValue",value:function(t){if(t instanceof e)return t.value;if(t instanceof l)return t.toOunces().value;if("number"==typeof t)return t;if(t=parseFloat(t),isNaN(t))throw"Invalid parameter passed to function.";return t}},{key:"toPounds",value:function(){return new l(this.weight/16)}},{key:"toString",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e="",n=this.weight;if(n>=16){var r=Math.floor(this.toPounds().value);if(n-=new l(r).toOunces().value,e=r.toString()+(1===r?"lb":"lbs"),0===n)return e;e+=" "}return e+n.toFixed(t)+"oz"}}])&&p(n.prototype,r),i&&p(n,i),e}();n.d(e,"Ounces",function(){return d}),n.d(e,"Pounds",function(){return l})}])});