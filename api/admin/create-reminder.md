# POST /api/v1/admin/reminder/create

Creates a new reminder.

## Request:

```json
{
    "displayName": "foo",
    "scheduling": {
        "type": "daily",
        "interval": 3
    },
    "category": "baz"
}
```

## Response:

```json
{
    "id": "foo",
    "displayName": "bar",
    "scheduling": {
        "type": "daily",
        "interval": 3
    },
    "category": "baz",
    "lastReminded": 0
}
```
