module.exports = ignores => ({
	name: 'ignore',
	setup(build) {
		build.onResolve({ filter: /.*/, namespace: 'ignore' }, args => ({
			path: args.path,
			namespace: 'ignore'
		}))
		for (const ignorePattern of ignores) {
			build.onResolve({ filter: ignorePattern.resourceRegExp }, args => {
				if (args.resolveDir.match(ignorePattern.contextRegExp)) {
					return {
						path: args.path, namespace: 'ignore'
					}
				} else {
					return {
						path: args.path
					}
				}
			})
		}

		build.onLoad({ filter: /.*/, namespace: 'ignore' }, () => ({
			contents: ''
		}))
	}
})
