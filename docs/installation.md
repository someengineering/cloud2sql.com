---
sidebar_position: 2
---

# Installation

## Homebrew

This is the easiest way to install Cloud2SQL. Please note, that the installation process will take a couple of minutes.

```bash
brew install someengineering/tap/cloud2sql
```

## Python pip

Alternatively you can install Cloud2SQL as Python package, where Python 3.9 or higher is required.

If you only need support for a specific database, instead of `cloud2sql[all]` you can choose between `cloud2sql[snowflake]`, `cloud2sql[parquet]`, `cloud2sql[postgresql]`, `cloud2sql[mysql]`.

```bash
pip3 install --user "cloud2sql[all]"
```

This will install the executable to the user install directory of your platform. Please make sure this installation directory is listed in `PATH`.
