/* eslint-env mocha */
import expectSet from './expectSet'
import relativePath from '../test/relativePath'
import expectTypeTest from '../test/expectTypeTest'

describe(relativePath(__filename), () => {
	expectTypeTest('isOfTypeSet', expectSet)
})
