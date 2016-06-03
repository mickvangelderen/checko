/* eslint-env mocha */
import expectObject from './expectObject'
import relativePath from '../test/relativePath'
import expectTypeTest from '../test/expectTypeTest'

describe(relativePath(__filename), () => {
	expectTypeTest('isObject', expectObject)
})
