import {expect, test} from '@oclif/test'

describe('articles/revalidate', () => {
  test
  .stdout()
  .command(['articles/revalidate'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['articles/revalidate', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
