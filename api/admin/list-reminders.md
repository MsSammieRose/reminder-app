# GET /api/v1/admin/reminder/list

Lists all the reminders that are scheduled.

## Request:

```json
{}
```

## Response:

```json
{
    "reminders": [{
        "id": "foo",
        "displayName": "bar",
        "scheduling": {
            "type": "daily",
            "interval": 3
        },
        "category": "baz"
    }, ...]
}
```
