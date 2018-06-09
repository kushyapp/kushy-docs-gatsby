---
title: Delete shop
route: "/shops/:id"
method: "delete"
page_type: "api"
last_updated: "2018-04-07"
---

```javascript
postData('http://kushy.net/api/v1/shops/09e4b270-5c99-11e8-aaf1-cd90abb01fbc', formData)
  .then(data => console.log(data)) // JSON from `response.json()` call
  .catch(error => console.error(error))

function postData(url) {
  return fetch(url, {
    cache: 'no-cache', 
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json'
      'Authorization': "Bearer " + myToken,
    },
    method: 'DELETE', 
    mode: 'cors', 
    referrer: 'no-referrer', 
  })
  .then(response => response.json()) // parses response to JSON
}
```

```php
<?php
$myToken = 'your-kushy-api-oauth-private-access-key';
$client = new GuzzleHttp\Client;
$response = $client->request('DELETE', 'http://kushy.net/api/v1/shops/09e4b270-5c99-11e8-aaf1-cd90abb01fbc', [
    'headers'         => [
        'Accept'        => 'application/json',
        'Authorization' => "Bearer $myToken"
    ]
]);
?>
```

This endpoint deletes a shop. 

### HTTP Request

`DELETE http://kushy.net/api/v3/shops/<ID>`

### Authorization

All requests require an OAuth access token and Admin level access. OAuth access tokens are passed via the `Authorization` HTTP header:

`Authorization: Bearer {access_token_here}`