```js

function isStringMatching(value, regexp) {
  return typeof value === 'string' && regexp.test(value)
}

function areDeepEqual(value, expected) {}
function areNotDeepEqual(value, expected) {}

function areEqualDates(value, expected) {}
function areEqualPropertyDescriptors(value, expected) {}
function areEqualRegExps(value, expected) {}

function areSameValue(value, expected) {}
function areSameValueZero(value, expected) {}

function hasOwnDescriptor(value, key) {}
function hasOwnDescriptorSatisfying(value, key, predicate) {}
function hasOwnProperty(value, key) {}
function hasOwnPropertySatisfying(value, key, predicate) {}
function hasProperty(value, key) {}
function hasPropertySatisfying(value, key, predicate) {}
function hasPrototype(value, key) {}
function hasPrototypeSatisfying(value, key, predicate) {}
function isArrayOfLength(value, length) {}
function isFunctionOfArity(value, arity) {}
function isStringOfLength(value, length) {}

function isInstanceOf(value, constructor_) {
  return value instanceof constructor
}

const getPrototype = Object.getPrototypeOf
  ? Object.getPrototypeOf
  : function(value) { return value.__proto__ }

function hasPrototype(value) {
  return Boolean(getPrototype(value))
}

function hasPrototypeSatisfying(value, prototype) {
  return getPrototype(value)
}

function hasPrototypeSatisfying(value, prototype, predicate) {

}

const objectToString = Object.prototype.toString

function hasTagName(value, tag) {
  const s = objectToString.call(value)
  return s.substring(8, s.length - 1) === tag
}

```
