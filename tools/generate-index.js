const basename = require('path').basename
const readdirSync = require('fs').readdirSync
const writeFileSync = require('fs').writeFileSync

const exportStatements = readdirSync('exports/')
.filter(filename => /\.test\.js$/.test(filename) === false)
.map(filename => basename(filename, '.js'))
.filter(name => name !== 'index')
.sort()
.map(name => `exports.${name} = require('./${name}')`)
.join('\n')

writeFileSync('exports/index.js',
`Object.defineProperty(exports, '__esModule', {
	value: true
})

${exportStatements}
`)
