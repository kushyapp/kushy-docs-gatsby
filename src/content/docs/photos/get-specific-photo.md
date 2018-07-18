---
title: Get specific photo
route: "/photos/:id"
method: "get"
page_type: "api"
last_updated: "2018-07-13"
---

```shell
  curl "https://kushy.net/api/v1/photos/01493e20-5d3b-11e8-a063-45ebd0caeed6"
```

```javascript
var api = 'https://kushy.net/api/v1/photos/01493e20-5d3b-11e8-a063-45ebd0caeed6';
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
$apiEndpoint = 'photos/01493e20-5d3b-11e8-a063-45ebd0caeed6"';

$response = $client->request('GET', $apiEndpoint);
$response = json_decode($response->getBody()->getContents(), true);

echo $response['image'];
?>
```

> The above command returns JSON structured like this:

```json
{
    id: "01493e20-5d3b-11e8-a063-45ebd0caeed6",
    image: "uploads/business/photos/chronic-pain-relief-center/YGWpFK7omBCMXwUwfXeHK06kxIcPasP8qyGZwbq4.jpeg",
    driver: "s3",
    caption: "Lots of delicious medicated drinks available",
    user_id: "16a30c60-5ae8-11e8-b79f-77e11dad9ce5",
    post_id: "b5c9eba0-5cb4-11e8-a29a-cf7a68a1ae49",
    featured: 0,
    deleted_at: null,
    created_at: {
        date: "2018-05-21 21:19:53.000000",
        timezone_type: 3,
        timezone: "UTC"
    },
    updated_at: {
        date: "2018-05-21 21:19:53.000000",
        timezone_type: 3,
        timezone: "UTC"
    }
    status: 1
}
```

This endpoint retrieves a specific photo.

### HTTP Request

`GET https://kushy.net/api/v1/photos/<ID>`

### URL Parameters

Parameter | Description
--------- | -----------
ID | The UUID of the photo

### The image object

Attributes | Type | Description
--------- | ------- | -----------
id | string | UUID of the current image
image | string | The URL of the image
caption | string | The image caption
user_id | string | The UUID of the user who uploaded
post_id | string | The UUID of the related post
status | boolean | Is post disabled by user?
featured | boolean | Is post featured?
created_at | datetime | The date and time the image was created
updated_at | datetime | The date and time the image was modified