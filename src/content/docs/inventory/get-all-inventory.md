---
title: Get all inventory
route: "/inventory/"
method: "get"
page_type: "api"
last_updated: "2018-07-13"
---

```shell
  curl "https://kushy.net/api/v1/inventory/"
```

```javascript
var api = 'https://kushy.net/api/v1/inventory/';
fetch(api)
    .then(function(response) {
        if (!response.ok) {
            console.log(response.statusText);
            return response.json();
        }
    });
```

```php
<?php
$client = new GuzzleHttp\Client(['base_uri' => 'https://kushy.net/api/v1/']);
$apiEndpoint = 'inventory';

$response = $client->request('GET', $apiEndpoint);
$response = json_decode($response->getBody()->getContents(), true);

echo 'State Name'. $response['california']['title'];
echo 'State Slug'. $response['california']['slug'];
foreach($response['california']['cities'] as $city) {
    echo $city
}
?>
```

> The above command returns JSON structured like this:

```json
{
}
```

This endpoint retrieves all US states and their city data.

### HTTP Request

`GET https://kushy.net/api/v1/inventory/`

### The states object

Attributes | Type | Description
--------- | ------- | -----------
[stateName] | object | State object (see specific state section)