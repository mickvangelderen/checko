/* eslint-env mocha */
import expectMap from './expectMap'
import relativePath from '../test/relativePath'
import expectTypeTest from '../test/expectTypeTest'

describe(relativePath(__filename), () => {
	expectTypeTest('isOfTypeMap', expectMap)
})
