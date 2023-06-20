# POST /api/v1/admin/reminder/create

Creates a new reminder.

## Request:

```json
{
    "displayName": "foo",
    "scheduling": {
        "type": "daily",
        "interval": 3
    }
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
    "lastReminded": 0
}
```
