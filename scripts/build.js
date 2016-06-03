import createFileTransformerSync from './lib/createFileTransformerSync'
import createJsonTransformer from './lib/createJsonTransformer'
import guardSpawnSync from './lib/guardSpawnSync'
import { join } from 'path'
import { resolve } from 'path'
import { relative } from 'path'
import { spawnSync } from 'child_process'

const workingDirectoryPath = join(__dirname, '..')
const inputDirectoryPath = join(workingDirectoryPath, 'source')
const outputDirectoryPath = join(workingDirectoryPath, 'build')
const copyFileSync = createFileTransformerSync(input => input)

build({
	inputDirectoryPath,
	outputDirectoryPath,
	preset: 'es2015',
	engines: {
		node: '>=0.12.0'
	},
	packageName: 'checko'
})

function build({
	inputDirectoryPath,
	outputDirectoryPath,
	preset,
	engines,
	packageName
}) {
	// Build source files.
	guardSpawnSync(spawnSync('babel', [
		relative(workingDirectoryPath, resolve(workingDirectoryPath, inputDirectoryPath)),
		'--out-dir', relative(workingDirectoryPath, resolve(workingDirectoryPath, outputDirectoryPath)),
		'--source-maps',
		'--presets', preset,
		'--ignore', 'node_modules/'
	], {
		cwd: workingDirectoryPath,
		stdio: 'inherit'
	}))

	// Build package.json.
	createFileTransformerSync(
		createJsonTransformer(
			createPackageTransformer({ packageName, engines })
		)
	)({
		workingDirectoryPath,
		inputFilePath: join(inputDirectoryPath, 'package.json'),
		outputFilePath: join(outputDirectoryPath, 'package.json')
	})

	// Build .eslintrc.json.
	createFileTransformerSync(
		createJsonTransformer(
			transformEslint
		)
	)({
		workingDirectoryPath,
		inputFilePath: join(inputDirectoryPath, '.eslintrc.json'),
		outputFilePath: join(outputDirectoryPath, '.eslintrc.json')
	})

	// Build mocha.opts
	createFileTransformerSync(
		input => input.toString().replace('--compilers js:babel-register', '')
	)({
		workingDirectoryPath,
		inputFilePath: join(inputDirectoryPath, 'test/mocha.opts'),
		outputFilePath: join(outputDirectoryPath, 'test/mocha.opts')
	})

	// Build readme.md and .npmignore.
	;[ 'readme.md', '.npmignore' ].forEach(relativeFilePath =>
		copyFileSync({
			workingDirectoryPath,
			inputFilePath: join(inputDirectoryPath, relativeFilePath),
			outputFilePath: join(outputDirectoryPath, relativeFilePath)
		})
	)
}

function createPackageTransformer({ packageName, engines }) {
	return function transformPackage(pkg) {
		return Object.keys(pkg)
		.filter(key => !/^(private|name)$/.test(key))
		.reduce((map, key) => {
			map[key] = key === 'devDependencies'
				? transformDevDependencies(pkg[key])
				: pkg[key]
			return map
		}, {
			name: packageName,
			engines
		})
	}
}

function transformDevDependencies(devDependencies) {
	return Object.keys(devDependencies)
	.filter(dependency => !/^babel-/.test(dependency))
	.reduce((map, key) => {
		map[key] = devDependencies[key]
		return map
	}, {})
}

function transformEslint() {
	return {
		"env": {
			"es6": true,
			"node": true
		},
		"rules": {
			"no-constant-condition": 0
		},
		"globals": {
			"regeneratorRuntime": true
		},
		"extends": "eslint:recommended",
		"root": true
	}
}
