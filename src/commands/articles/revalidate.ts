import {CliUx, Command, Flags} from '@oclif/core'

export default class ArticlesRevalidate extends Command {
  static description = 'Revalidate CDN cache on-demand for heelog articles'

  static examples = ['<%= config.bin %> <%= command.id %> "--all"', '<%= config.bin %> <%= command.id %> "--single"']

  static flags = {
    all: Flags.boolean({char: 'a', description: 'Revalidate All articles'}),
    single: Flags.boolean({char: 's', description: 'Select a single article to revalidate'}),
  }

  static args = []

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(ArticlesRevalidate)
    this.log(args.subject)
    if (flags.all) {
      const token = await CliUx.ux.prompt('To revalidate articles, please enter the password: ')
      this.log(token)
    }

    if (flags.single) {
      this.log(flags.single.toString())
    }
  }
}
