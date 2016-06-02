<div align="center">
    <img src="media/gecko.jpg" alt="Checko the gecko"/>
    <p>There is a new sherrif in town to check your values for type and range errors! :police_car:</p>
</div>

# Motivation

I needed predicates and assertions for type and range checking that:

 * have a fast and simple implementation,
 * only check for what their name implies,
 * yield standard errors,
 * yield readable stack traces,
 * can be included when needed,
 * can be used to create custom predicates and assertions and
 * do.not.use.this.style()

# Installation

```bash
npm install checko
```

# Example

Import any of the exported predicates and assertions and simply use them. 

```javascript
const expectArray = require('checko/exports/expectArray')
// or
const expectArray = require('checko').expectArray
// or
import expectArray from 'checko/exports/expectArray'
// or
import { expectArray } from 'checko'

expectArray('this is not an array')
```

# Documentation

For some 'expect' variants there is no 'is' variant because the language itself provides an operator. 

| Predicate          | Assertion                    |
|--------------------|------------------------------|
| value === expected | expectEqual(expected, value) |
| isArray(value)     | expectArray(value)           |

All files in [exports/](exports/) can be directly included. Implementations for each predicate and assertion can be found there. Examples are shown in the accompanying `.test.js`. 

I've refrained from using ES2015 modules because the code it transpiles to a lot harder to read. 

Due to the simple nature of this package (except for the `isDeepEqual(expected, value)` implementation) there is no further documentation. If this is a problem, please let me know.
