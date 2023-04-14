---
sidebar_position: 2
sidebar_label: "1. Installation"
---

# Installation

```mdx-code-block
import AsciinemaPlayer from '@site/src/components/AsciinemaPlayer';
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
```

Cloud2SQL can be installed using Homebrew on macOS or Python pip on Linux, Windows, and macOS.

## Homebrew (macOS) {#homebrew}

```bash
brew install someengineering/tap/cloud2sql
```

:::note

The installation process will take a couple of minutes.

:::

## Python pip (Linux, Windows, macOS) {#pip}

<Tabs>
<TabItem value="user" label="User">

The below command will install the `cloud2sql` command to `~/.local/bin/` on Linux, `~/Library/Python/3.<version>/bin/` on macOS, or `%APPDATA%\Python\bin\` on Windows. (Make sure those directories are part of your `PATH` environment variable.)

```bash
$ pip3 install --user 'cloud2sql[all]'
```

:::tip

If you are unsure where pip installs user packages, you can run `python3 -m site --user-base` to find out. The binaries will be in the `bin` subdirectory of the path returned by the command.

:::

</TabItem>
<TabItem value="windows" label="Virtual Environment">

The following set of commands will install the `cloud2sql` command to the `cloud2sql-venv` virtual environment, which can be activated using `source cloud2sql-venv/bin/activate`.

```bash
$ python3 -m venv cloud2sql-venv
$ source cloud2sql-venv/bin/activate
$ pip3 install 'cloud2sql[all]'
```

</TabItem>
</Tabs>

:::note

**Python 3.9+ and [pip](https://pip.pypa.io/) are required.** If your system has Python 3.9+ but not pip, you can install pip using the command `python3 -m ensurepip`.

:::

:::info

If you only require support for a specific database, you can choose between `cloud2sql[snowflake]`, `cloud2sql[parquet]`, `cloud2sql[postgresql]`, and `cloud2sql[mysql]` instead of installing `cloud2sql[all]`.

:::

:::caution

Snowflake currently only supports Python 3.10. If you are using Python 3.11, use a database-specific package instead of `cloud2sql[all]`.

:::

<p><AsciinemaPlayer src={require('./asciinema/cloud2sql-install.cast').default} cols={80} rows={20} preload={true} autoPlay={false} loop={false} poster="npt:0:6" /></p>
