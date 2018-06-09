---
title: Get specific shop
route: "/shops/:id"
method: "get"
page_type: "api"
last_updated: "2018-04-05"
---

```shell
  curl "http://kushy.net/api/v3/shops/:id"
```

```javascript
var api = 'http://kushy.net/api/v1/shops/09e4b270-5c99-11e8-aaf1-cd90abb01fbc';
fetch(api)
    .then(function(response) {
        if (!response.ok) {
            console.log(response.statusText);
            return response.json();
        }
    });
```

```php
$client = new GuzzleHttp\Client;
$response = $client->request('GET', 'http://kushy.net/api/v1/shops/09e4b270-5c99-11e8-aaf1-cd90abb01fbc');
```

This endpoint retrieves a specific shop.

### HTTP Request

`GET http://kushy.net/api/v3/shops/<ID>`

### URL Parameters

Parameter | Description
--------- | -----------
ID | The ID of the shop to retrieve
