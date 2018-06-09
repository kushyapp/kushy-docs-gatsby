---
title: Delete strain
route: "/strains/:id"
method: "delete"
page_type: "api"
last_updated: "2018-04-05"
---

```shell
curl "http://kushy.net/api/v3/strains/420"
  -X DELETE
  -H "Authorization: API_KEY"
```

This endpoint deletes a specific strain.

### HTTP Request

`DELETE http://kushy.net/api/v3/strains/<ID>`

### URL Parameters

Parameter | Description
--------- | -----------
ID | The ID of the strain to delete