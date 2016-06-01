![Checko the gecko](media/gecko.jpg)

There is a new Sherrif in town to check your values for type and range errors! :police_car:

# Mindset

TODO
Simplicity ->
    use TypeError for value type comparisons and RangeError for value comparisons

For some 'expect' variants there is no 'is' variant because the language itself provides an operator. 

| Is                 | Expect                       |
|--------------------|------------------------------|
| value === expected | expectEqual(expected, value) |
| isArray(value)     | expectArray(value)           |

User friendly stack traces -> no es6 modules
Use only what you need -> require('checko/exports/assertArray')

# Installation

`npm install checko`

# Usage

Import any of the exported predicates and assertions and simply use them. 

```js
const expectArray = require('checko/exports/expectArray')
// or
const expectArray = require('checko').expectArray
// or
import expectArray from 'checko/exports/expectArray'
// or
import { expectArray } from 'checko'
```

# Documentation

Since the code is quite simple, look up implementation details and edge cases in the code and/or tests themselves. The information you need is well organized due to the modular nature of checko. 

# Thanks

This project uses [node-package-skeleton](https://github.com/mickvangelderen/node-package-skeleton) as a starting point for package development. 

# Other guides

* [Development guide](development.md)
