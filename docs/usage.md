---
sidebar_position: 4
sidebar_label: "3. Usage"
---

# Usage

```mdx-code-block
import AsciinemaPlayer from '@site/src/components/AsciinemaPlayer';
```

Once you have created your configuration file, using Cloud2SQL is as simple as executing the following command:

```bash
$ cloud2sql --config myconfig.yml
```

And that's it! After a couple of minutes, when the collection is done, you will have a copy of your cloud infrastructure in your database.

<p><AsciinemaPlayer src={require('./asciinema/cloud2sql-cfg_and_run.cast').default} cols={80} rows={20} preload={true} autoPlay={false} loop={false} poster="npt:0:3" /></p>

:::info

Refer to the [Resoto documentation](https://resoto.com/docs/reference/data-models) for a full list of currently supported resources.

:::
