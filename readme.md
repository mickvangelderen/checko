## Mindset

Simplicity ->
    use TypeError for value type comparisons and RangeError for value comparisons

For some 'expect' variants there is no 'is' variant because the language itself provides an operator. 

| Is                 | Expect                       |
|--------------------|------------------------------|
| value === expected | expectEqual(expected, value) |
| isArray(value)     | expectArray(value)           |


User friendly stack traces -> no es6 modules
Use only what you need -> require('checko/exports/assertArray')

# Usage guide

This guide is for people who want to use NODE_PACKAGE_SKELETON_NAME. 

Other guides:
* [Development guide](development.md)

## Install

`npm install NODE_PACKAGE_SKELETON_NAME`

## Usage

```js
import NODE_PACKAGE_SKELETON_NAME from 'NODE_PACKAGE_SKELETON_NAME'

NODE_PACKAGE_SKELETON_USAGE
```

## Thanks

This project uses [node-package-skeleton](https://github.com/mickvangelderen/node-package-skeleton) as a starting point for package development. 
