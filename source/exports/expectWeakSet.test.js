/* eslint-env mocha */
import expectWeakSet from './expectWeakSet'
import relativePath from '../test/relativePath'
import expectTypeTest from '../test/expectTypeTest'

describe(relativePath(__filename), () => {
	expectTypeTest('isOfTypeWeakSet', expectWeakSet)
})
