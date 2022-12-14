Heelog CLI tool
=================

This is a CLI tool for heelog re-validation for CDN cache

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g heelog.cli
$ heelog.cli COMMAND
running command...
$ heelog.cli (--version)
heelog.cli/1.0.8 darwin-x64 node-v16.14.2
$ heelog.cli --help [COMMAND]
USAGE
  $ heelog.cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`heelog.cli articles revalidate`](#heelogcli-articles-revalidate)
* [`heelog.cli help [COMMAND]`](#heelogcli-help-command)
* [`heelog.cli plugins`](#heelogcli-plugins)
* [`heelog.cli plugins:install PLUGIN...`](#heelogcli-pluginsinstall-plugin)
* [`heelog.cli plugins:inspect PLUGIN...`](#heelogcli-pluginsinspect-plugin)
* [`heelog.cli plugins:install PLUGIN...`](#heelogcli-pluginsinstall-plugin-1)
* [`heelog.cli plugins:link PLUGIN`](#heelogcli-pluginslink-plugin)
* [`heelog.cli plugins:uninstall PLUGIN...`](#heelogcli-pluginsuninstall-plugin)
* [`heelog.cli plugins:uninstall PLUGIN...`](#heelogcli-pluginsuninstall-plugin-1)
* [`heelog.cli plugins:uninstall PLUGIN...`](#heelogcli-pluginsuninstall-plugin-2)
* [`heelog.cli plugins update`](#heelogcli-plugins-update)

## `heelog.cli articles revalidate`

Revalidate CDN cache on-demand for heelog articles

```
USAGE
  $ heelog.cli articles revalidate [-a] [-s]

FLAGS
  -a, --all     Revalidate All articles
  -s, --single  Select a single article to revalidate

DESCRIPTION
  Revalidate CDN cache on-demand for heelog articles

EXAMPLES
  $ heelog.cli articles revalidate "--all"

  $ heelog.cli articles revalidate "--single"
```

## `heelog.cli help [COMMAND]`

Display help for heelog.cli.

```
USAGE
  $ heelog.cli help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for heelog.cli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.14/src/commands/help.ts)_

## `heelog.cli plugins`

List installed plugins.

```
USAGE
  $ heelog.cli plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ heelog.cli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.1/src/commands/plugins/index.ts)_

## `heelog.cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ heelog.cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ heelog.cli plugins add

EXAMPLES
  $ heelog.cli plugins:install myplugin 

  $ heelog.cli plugins:install https://github.com/someuser/someplugin

  $ heelog.cli plugins:install someuser/someplugin
```

## `heelog.cli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ heelog.cli plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ heelog.cli plugins:inspect myplugin
```

## `heelog.cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ heelog.cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ heelog.cli plugins add

EXAMPLES
  $ heelog.cli plugins:install myplugin 

  $ heelog.cli plugins:install https://github.com/someuser/someplugin

  $ heelog.cli plugins:install someuser/someplugin
```

## `heelog.cli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ heelog.cli plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ heelog.cli plugins:link myplugin
```

## `heelog.cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ heelog.cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ heelog.cli plugins unlink
  $ heelog.cli plugins remove
```

## `heelog.cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ heelog.cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ heelog.cli plugins unlink
  $ heelog.cli plugins remove
```

## `heelog.cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ heelog.cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ heelog.cli plugins unlink
  $ heelog.cli plugins remove
```

## `heelog.cli plugins update`

Update installed plugins.

```
USAGE
  $ heelog.cli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
* [`heelog.cli articles revalidate`](#heelogcli-articles-revalidate)
* [`heelog.cli help [COMMAND]`](#heelogcli-help-command)

## `heelog.cli articles revalidate`

Revalidate CDN cache on-demand for heelog articles

```
USAGE
  $ heelog.cli articles revalidate [-a] [-s]

FLAGS
  -a, --all     Revalidate All articles
  -s, --single  Select a single article to revalidate

DESCRIPTION
  Revalidate CDN cache on-demand for heelog articles

EXAMPLES
  $ heelog.cli articles revalidate "--all"

  $ heelog.cli articles revalidate "--single"
```

## `heelog.cli help [COMMAND]`

Display help for heelog.cli.

```
USAGE
  $ heelog.cli help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for heelog.cli.
```
