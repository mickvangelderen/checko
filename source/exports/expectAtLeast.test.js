/* eslint-env mocha */
import expectAtLeast from './expectAtLeast'
import relativePath from '../test/relativePath'
import expectComparisonTest from '../test/expectComparisonTest'

describe(relativePath(__filename), () => {
	expectComparisonTest((expected, value) => value >= expected, expectAtLeast)
})
