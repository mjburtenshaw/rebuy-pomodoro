# rebuy-pomodoro-db

Persists data for the rebuy-pomodoro application.

![Static Badge](https://img.shields.io/badge/version-0.0.0-aa3288?labelColor=3754d5)

## Table of Contents

- [DBML Metadata](#dbml-metadata)
- [Best Practices](#best-practices)
- [To Do](#to-do)

## DBML Metadata

The primary purpose of DBML documents is to highlight relationships and definitive attributes for entities.
To clean up clutter, I elected **not** to list metadata for every table.
So, assume all tables have the following metadata columns unless stated otherwise:

```dbml
version text [not null, note: 'Indicates the schema of the table at the time the record was created. It is a derivative of the count of migrations made to the table.']
created_by uuid [not null, ref: > users_accounts.id]
updated_by uuid [not null, ref: > users_accounts.id]
deleted_by uuid [ref: > users_accounts.id]
created_at timestamptz [not null, default: `now()`]
updated_at timestamptz [not null, default: `now()`]
deleted_at timestamptz
```

## Best Practices

At this stage, I am willing to pay performance for flexibility.

- **Enums**: I don't use enums in the database layer to represent business values. I enforce those at the DAO layer instead.
- **Default values**: Default values are a business decision, and so should be enforced at the DAO layer. Exceptions to this include metadata, such as record creation dates.
- **Temporal data**: All timestamps should be UTC and only go to the millisecond.
- **Text data**: Don't use varchar. Content length is a business decision and should enforced at the DAO layer.

## To Do

- Implement IAM to introduce users, organizations, tenants, and resource ACLs.
