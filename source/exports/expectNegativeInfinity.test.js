/* eslint-env mocha */
import expectNegativeInfinity from './expectNegativeInfinity'
import relativePath from '../test/relativePath'
import expectTypeTest from '../test/expectTypeTest'

describe(relativePath(__filename), () => {
	expectTypeTest('isNegativeInfinity', expectNegativeInfinity)
})
