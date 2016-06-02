/* eslint-env mocha */
const exported = require('./index')
const expect = require('must')
const relativePath = require('../test/relativePath')
const basename = require('path').basename
const readdirSync = require('fs').readdirSync

describe(relativePath(__filename), () => {
	it('should export all files', () => {
		expect(exported).to.be.an.object()
		readdirSync(__dirname)
		.filter(file => /\.js$/.test(file) && /\.test\.js$/.test(file) === false)
		.map(file => basename(file, '.js'))
		.filter(name => name !== 'index')
		.forEach(name => {
			expect(exported).to.have.ownProperty(name, require(`./${name}`))
		})
	})
})
