/* eslint-env mocha */
import expectUint8ClampedArray from './expectUint8ClampedArray'
import relativePath from '../test/relativePath'
import expectTypeTest from '../test/expectTypeTest'

describe(relativePath(__filename), () => {
	expectTypeTest('isOfTypeUint8ClampedArray', expectUint8ClampedArray)
})
