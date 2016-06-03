/* eslint-env mocha */
import expectEqual from './expectEqual'
import relativePath from '../test/relativePath'
import expectComparisonTest from '../test/expectComparisonTest'

describe(relativePath(__filename), () => {
	expectComparisonTest((expected, value) => value === expected, expectEqual)
})
