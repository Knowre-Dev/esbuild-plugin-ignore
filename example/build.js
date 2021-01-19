import module from 'module'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import esbuild from 'esbuild'
import ignorePlugin from '../index.js'

(async () => {
  const opt = {
    platform: 'node',
    format: 'esm',
    target: 'node14.15.4',
    entryPoints: [join(dirname(fileURLToPath(import.meta.url)), 'index.js')],
    bundle: true,
    external: [...module.builtinModules, 'pg-hstore']
  }
  const plugins = [ignorePlugin([
    {
      resourceRegExp: /pg-native$/,
      contextRegExp: /node_modules\/sequelize|node_modules\/pg/
    },
    {
      resourceRegExp: /tedious|sqlite3|mariadb$/,
      contextRegExp: /node_modules\/sequelize/
    }
  ])]
  await esbuild.build({ ...opt, outfile: 'example/with-ignore.mjs' })
  await esbuild.build({ ...opt, plugins, outfile: 'example/without-ignore.mjs' })
})()
