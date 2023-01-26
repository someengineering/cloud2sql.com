---
sidebar_position: 3
sidebar_label: "2. Configuration"
---

# Configuration

Cloud2SQL sources and destinations are configured via a [YAML](https://yaml.org) configuration file. Create your own configuration by modifying [`config-template.yaml`](https://github.com/someengineering/cloud2sql/blob/main/config-template.yaml).

You can safely delete the sections that are not needed (e.g., you can delete the `aws` section if you do not use <abbr title="Amazon Web Services">AWS</abbr>).

## Sources

**Cloud2SQL supports all sources supported by [Resoto](https://resoto.com).** By default, Cloud2SQL ships with <abbr title="Amazon Web Services">AWS</abbr>, Google Cloud, DigitalOcean, and Kubernetes source plugins pre-installed.

### AWS

```yaml
sources:
  aws:
    # AWS Access Key ID (null to load from env - recommended)
    access_key_id: null
    # AWS Secret Access Key (null to load from env - recommended)
    secret_access_key: null
    # IAM role name to assume
    role: null
    # List of AWS profiles to collect
    profiles: null
    # List of AWS Regions to collect (null for all)
    region: null
    # Scrape the entire AWS organization
    scrape_org: false
    # Assume given role in current account
    assume_current: false
    # Do not scrape current account
    do_not_scrape_current: false
```

:::tip

When collecting multiple accounts, the `role` and `scrape_org` options instruct Cloud2SQL to fetch the list of all organization accounts and specify a role to assume. Alternatively, you can specify the list of accounts to collect using the `profiles` option if those profiles have been defined in your [AWS CLI config file](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html).

:::

### Google Cloud

```yaml
sources:
  gcp:
    # GCP service account file(s)
    service_account: []
    # GCP project(s)
    project: []
```

### Kubernetes

```yaml
sources:
  k8s:
    # Configure access via kubeconfig files.
    # Structure:
    #   - path: "/path/to/kubeconfig"
    #     all_contexts: false
    #     contexts: ["context1", "context2"]
    config_files: []
    # Alternative: configure access to k8s clusters directly in the config.
    # Structure:
    #   - name: 'k8s-cluster-name'
    #     certificate_authority_data: 'CERT'
    #     server: 'https://k8s-cluster-server.example.com'
    #     token: 'TOKEN'
    configs: []
```

### DigitalOcean

```yaml
sources:
digitalocean:
  # DigitalOcean API tokens for the teams to be collected
  api_tokens: []
  # DigitalOcean Spaces access keys for the teams to be collected, separated by colons
  spaces_access_keys: []
```

## Destinations

Cloud2SQL uses [SQLAlchemy](https://sqlalchemy.org) to connect to a destination database.

If your database is not listed below, you can check if it is supported in [SQLAlchemy dialects](https://docs.sqlalchemy.org/en/20/dialects/index.html). If so, simply install the driver and use the connection string from the SQLAlchemy documentation.

### SQLite

```yaml
destinations:
  sqlite:
    database: /path/to/database.db
```

### PostgreSQL

```yaml
destinations:
  postgresql:
    host: 127.0.0.1
    port: 5432
    user: cloud2sql
    password: changeme
    database: cloud2sql
    args:
      key: value
```

### MySQL

```yaml
destinations:
  mysql:
    host: 127.0.0.1
    port: 3306
    user: cloud2sql
    password: changeme
    database: cloud2sql
    args:
      key: value
```

### MariaDB

```yaml
destinations:
  mariadb:
    host: 127.0.0.1
    port: 3306
    user: cloud2sql
    password: changeme
    database: cloud2sql
    args:
      key: value
```

### Snowflake

```yaml
destinations:
  snowflake:
    host: myorg-myaccount
    user: cloud2sql
    password: changeme
    database: cloud2sql/public
    args:
      warehouse: compute_wh
      role: accountadmin
```

### Apache Parquet

```yaml
destinations:
  file:
    path: /where/to/write/parquet/files/
    format: parquet
    batch_size: 100_000
```

### CSV

```yaml
destinations:
  file:
    path: /where/to/write/to/csv/files/
    format: csv
    batch_size: 100_000
```
