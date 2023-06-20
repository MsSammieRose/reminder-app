# PATCH /api/v1/admin/reminder/{id}

Updates an existing reminder given its ID.

## Request:

```json
{
    "displayName": "foo",
    "scheduling": {
        "type": "daily",
        "interval": 3,
    },
    "category": "baz"
}
```

## Response:

```json
{}
```

Returns a 404 if the reminder does not exist.
