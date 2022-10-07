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
heelog.cli/1.0.0 darwin-x64 node-v16.14.2
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



