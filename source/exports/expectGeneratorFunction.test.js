/* eslint-env mocha */
import expectGeneratorFunction from './expectGeneratorFunction'
import relativePath from '../test/relativePath'
import expectTypeTest from '../test/expectTypeTest'

describe(relativePath(__filename), () => {
	expectTypeTest('isOfTypeGeneratorFunction', expectGeneratorFunction)
})
