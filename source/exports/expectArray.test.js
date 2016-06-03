/* eslint-env mocha */
import expectArray from './expectArray'
import relativePath from '../test/relativePath'
import expectTypeTest from '../test/expectTypeTest'

describe(relativePath(__filename), () => {
	expectTypeTest('isOfTypeArray', expectArray)
})
