# esbuild-plugin-ignore
Plugin to ignore some certain dependencies from bundling, for [esbuild](https://esbuild.github.io/). It's behavior is much same as the `IgnorePlugin` from webpack(https://webpack.js.org/plugins/ignore-plugin/).

## Usage
```
{
	// Other esbuild options,
	plugins: [
		ignorePlugin([
			{
				resourceRegExp: /pg-native$/,
				contextRegExp: /node_modules\/sequelize|node_modules\/pg/
			},
			{
				resourceRegExp: /tedious|sqlite3|mariadb$/,
				contextRegExp: /node_modules\/sequelize/
			}
		])
	]
}
```

* It's the same as the Webpack 5's plugin of the same name.
* You can refer to [example](./example) directory for usage.
* It supports both ESM and CommonJS.
