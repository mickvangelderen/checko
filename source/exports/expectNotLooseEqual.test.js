/* eslint-env mocha */
import expectNotLooseEqual from './expectNotLooseEqual'
import relativePath from '../test/relativePath'
import expectComparisonTest from '../test/expectComparisonTest'

describe(relativePath(__filename), () => {
	expectComparisonTest((expected, value) => value != expected, expectNotLooseEqual)
})
