/* eslint-env mocha */
import expectPositiveInfinity from './expectPositiveInfinity'
import relativePath from '../test/relativePath'
import expectTypeTest from '../test/expectTypeTest'

describe(relativePath(__filename), () => {
	expectTypeTest('isPositiveInfinity', expectPositiveInfinity)
})
