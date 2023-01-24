---
sidebar_position: 2
sidebar_label: "1. Installation"
---

# Installation

```mdx-code-block
import AsciinemaPlayer from '@site/src/components/AsciinemaPlayer';
```

Cloud2SQL can be installed using Homebrew or Python pip.

## Homebrew

```bash
brew install someengineering/tap/cloud2sql
```

:::note

The installation process will take a couple of minutes.

:::

## Python pip

**Python 3.9+ is required.** Create a new virtual environment and install the `cloud2sql[all]` package:

```bash
$ pip3 install --user cloud2sql[all]
```

:::note

If you only require support for a specific database, you can choose between `cloud2sql[snowflake]`, `cloud2sql[parquet]`, `cloud2sql[postgresql]`, and `cloud2sql[mysql]` instead of installing `cloud2sql[all]`.

:::

:::caution

Snowflake currently only supports Python 3.10. If you are using Python 3.11, use a database-specific package instead of `cloud2sql[all]`.

:::

<p><AsciinemaPlayer src={require('./asciinema/cloud2sql-install.cast').default} cols={80} rows={20} preload={true} autoPlay={false} loop={false} poster="npt:0:6" /></p>
