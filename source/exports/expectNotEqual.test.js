/* eslint-env mocha */
import expectNotEqual from './expectNotEqual'
import relativePath from '../test/relativePath'
import expectComparisonTest from '../test/expectComparisonTest'

describe(relativePath(__filename), () => {
	expectComparisonTest((expected, value) => value !== expected, expectNotEqual)
})
