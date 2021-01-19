import fs from 'fs'

describe('simple test', () => {
  test('with ignore', async () => {
    const out = await fs.promises.readFile('example/with-ignore.mjs', 'utf-8')
    expect(out.includes('// ignore:./dialects/mariadb')).toBe(false);
  })

  test('without ignore', async () => {
    const out = await fs.promises.readFile('example/without-ignore.mjs', 'utf-8')
    expect(out.includes('// ignore:./dialects/mariadb')).toBe(true);
  })
})
