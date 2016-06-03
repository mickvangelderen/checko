/* eslint-env mocha */
import expectInfiniteNumber from './expectInfiniteNumber'
import relativePath from '../test/relativePath'
import expectTypeTest from '../test/expectTypeTest'

describe(relativePath(__filename), () => {
	expectTypeTest('isInfiniteNumber', expectInfiniteNumber)
})
