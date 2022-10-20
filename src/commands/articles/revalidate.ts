import axios from 'axios'
import * as inquirer from 'inquirer'
import {CliUx, Command, Flags} from '@oclif/core'

interface Page {
  id:string,
  name:string
}

export default class ArticlesRevalidate extends Command {
  static description = 'Revalidate CDN cache on-demand for heelog articles'

  static examples = ['<%= config.bin %> <%= command.id %> "--all"', '<%= config.bin %> <%= command.id %> "--single"']

  static flags = {
    all: Flags.boolean({char: 'a', description: 'Revalidate All articles'}),
    single: Flags.boolean({char: 's', description: 'Select a single article to revalidate'}),
  }

  static args = []

  public async run(): Promise<void> {
    const {flags} = await this.parse(ArticlesRevalidate)
    if (flags.all && flags.single) return this.error('❌ You can not use two flags together, please use --all or --single')
    if (Object.keys(flags).length === 0) {
      const answer = await inquirer.prompt([{
        name: 'flag',
        message: 'Please select a flag: ',
        type: 'list',
        choices: [{name: 'all'}, {name: 'single'}],
      }])
      flags[answer.flag] = true
    }

    if (flags.all) {
      const token = await CliUx.ux.prompt('To revalidate articles, please enter the password: ')
      try {
        CliUx.ux.action.start('revalidating...')
        const {data: {revalidated}} = await axios.get('http://heelog.dev/api/revalidate', {
          data: {
            type: 'all',
            token: token,
          },
        })
        if (revalidated) {
          CliUx.ux.action.stop('✅ done')
        } else {
          CliUx.ux.action.stop('❌ failed')
        }
      } catch  {
        this.error('❌ Please provide valid token to run revalidation')
      }
    }

    if (flags.single) {
      const res = await axios.get<{pages:Page[]}>('http://heelog.dev/api/notionPages')
      const {pages}  = res.data
      const answer = await inquirer.prompt([{
        name: 'article',
        message: 'Select an article to revalidate: ',
        type: 'list',
        choices: [...pages],
      }])

      const page = pages.find((p: Page) => {
        if (p.name === answer.article) {
          return p.id
        }

        return null
      })

      const token = await CliUx.ux.prompt('To revalidate articles, please enter the password: ')

      if (page) {
        try {
          CliUx.ux.action.start('revalidating...')
          const {data: {revalidated}} = await axios.get('http://heelog.dev/api/revalidate', {
            data: {
              type: 'single',
              id: page.id,
              token: token,
            },
          })
          if (revalidated) {
            CliUx.ux.action.stop('✅ done')
          } else {
            CliUx.ux.action.stop('❌ failed')
          }
        } catch  {
          this.error('❌ Please provide valid token to run revalidation')
        }
      }
    }
  }
}
