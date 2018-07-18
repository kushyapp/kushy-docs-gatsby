---
title: Get all photos
route: "/photos/"
method: "get"
page_type: "api"
last_updated: "2018-07-13"
---

```shell
  curl "https://kushy.net/api/v1/photos/"
```

```javascript
var api = 'https://kushy.net/api/v1/photos/';
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
$apiEndpoint = 'photos';

$response = $client->request('GET', $apiEndpoint);
$response = json_decode($response->getBody()->getContents(), true);

foreach($response['data'] as $image) {
    echo $image->image;
}
?>
```

> The above command returns JSON structured like this:

```json
{
    data: [
        {
            id: "01493e20-5d3b-11e8-a063-45ebd0caeed6",
            image: "https://kushy-frontend-assets.s3.amazonaws.com/uploads/business/photos/chronic-pain-relief-center/YGWpFK7omBCMXwUwfXeHK06kxIcPasP8qyGZwbq4.jpeg",
            caption: "Lots of delicious medicated drinks available",
            user_id: "16a30c60-5ae8-11e8-b79f-77e11dad9ce5",
            post_id: "b5c9eba0-5cb4-11e8-a29a-cf7a68a1ae49",
            featured: 0,
            created_at: {
                date: "2018-05-21 21:07:44.000000",
                timezone_type: 3,
                timezone: "UTC"
            },
            updated_at: {
                date: "2018-05-21 21:07:44.000000",
                timezone_type: 3,
                timezone: "UTC"
            }
        }
    ],
    links: {
        self: "link-value",
        first: "http://localhost/api/v1/photos?page=1",
        last: "http://localhost/api/v1/photos?page=1",
        prev: null,
        next: null
    },
    meta: {
        current_page: 1,
        from: 1,
        last_page: 1,
        path: "http://localhost/api/v1/photos",
        per_page: 10,
        to: 8,
        total: 8
    }
}
```

This endpoint retrieves all photos (usually attached to posts).

### HTTP Request

`GET https://kushy.net/api/v1/photos/`

### The photos object

Attributes | Type | Description
--------- | ------- | -----------
current_page | number | Current page number
data | array | Array of image objects (see get specific photo)
link | object | Links object (links to next/prev page)
meta | object | Meta object with pagination data