/* eslint-env mocha */
import expectWeakMap from './expectWeakMap'
import relativePath from '../test/relativePath'
import expectTypeTest from '../test/expectTypeTest'

describe(relativePath(__filename), () => {
	expectTypeTest('isOfTypeWeakMap', expectWeakMap)
})
