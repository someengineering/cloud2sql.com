---
sidebar_position: 1
sidebar_label: Overview
id: overview
title: Documentation
pagination_prev: null
pagination_next: null
---

# Overview

```mdx-code-block
import AsciinemaPlayer from '@site/src/components/AsciinemaPlayer';
/* import DocCardList from '@theme/DocCardList'; */
/* import {useDocsSidebar} from '@docusaurus/theme-common/internal'; */
```

Cloud2SQL is a tool based on [Resoto](https://resoto.com)'s collector plugins that allows you to collect data from various cloud infrastructure sources and export it to a database (like [Snowflake](https://snowflake.com), [PostgreSQL](https://postgresql.org), [MariaDB](https://mariadb.org), or [MySQL](https://mysql.com)) or write it as [Parquet](https://parquet.apache.org), [SQLite](https://sqlite.org), or [<abbr title="comma-separated values">CSV</abbr>](https://en.wikipedia.org/wiki/Comma-separated_values) files for ingestion in your data lake.

<p><AsciinemaPlayer src={require('./asciinema/cloud2sql.cast').default} cols={80} rows={20} preload={true} autoPlay={true} loop={true} /></p>

<!-- <DocCardList items={useDocsSidebar().items.slice(1)} /> -->
