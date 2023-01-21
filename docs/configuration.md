---
sidebar_position: 3
---

# Configuration

Cloud2SQL sources and destinations are configured via a YAML configuration file. Create your own configuration by modifying [`config-template.yaml`](https://github.com/someengineering/cloud2sql/blob/main/config-template.yaml).

You can safely delete the sections that are not needed (e.g., you can delete the `aws` section if you do not use AWS). All sections refer to cloud providers and are enabled if a configuration section is provided.

## Sources

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

### My database is not listed here

Cloud2SQL uses SQLAlchemy to connect to the database. If your database is not listed here, you can check if it is supported in [SQLAlchemy Dialects](https://docs.sqlalchemy.org/en/20/dialects/index.html). Install the relevant driver and use the connection string from the documentation.

### Example

We use a minimal configuration [example](https://github.com/someengineering/cloud2sql/blob/main//config-example.yaml) and export the data to a SQLite database. The example uses our AWS default credentials and the default kubernetes config.

```bash
cloud2sql --config config-example.yaml
```

For a more in-depth example, check out our [blog post](https://resoto.com/blog/2022/12/21/installing-cloud2sql).
