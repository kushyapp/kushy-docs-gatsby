---
title: Get search results from all posts
route: "/search/:field/:search"
method: "get"
page_type: "api"
last_updated: "2018-07-13"
---

```shell
  curl "https://kushy.net/api/v1/search/name/chronic"
```

```javascript
var api = 'https://kushy.net/api/v1/search/name/chronic';
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
$apiEndpoint = 'search/name/chronic';

$response = $client->request('GET', $apiEndpoint);
$response = json_decode($response->getBody()->getContents(), true);

foreach($response['data'] as $item) {
    echo $item->name;
}
?>
```

> The above command returns JSON structured like this:

```json
{
    data: [
        {
            id: "371fc9f0-5ae8-11e8-9d8b-c5f206a16ed9",
            name: "BC Chronic",
            section: "strain",
            slug: "bc-chronic",
            categories: [
                {
                    category_id: 16,
                    post_id: "371fc9f0-5ae8-11e8-9d8b-c5f206a16ed9",
                    category: {
                        id: 16,
                        name: "Hybrid",
                        slug: "hybrid",
                        section: "strain",
                        parent: 0
                    }
                }
            ],
            avatar: "http://localhost/img/Icons/avatar-default-leaf.jpg",
            featured_img: "http://localhost/img/Icons/avatar-default-leaf.jpg",
            rating: 0,
            featured: 0,
            verified: 0,
            location: {
                latitude: "0.0000000",
                longitude: "0.0000000",
                address: null,
                state: null,
                city: null,
                postal_code: null,
                country: null
            }
        },
    ]
}
```

This endpoint searches all posts (shops, brands, products, strains) for a search term in a specific field.

### HTTP Request

`GET https://kushy.net/api/v1/search/<FIELD>/<SEARCH>`

### The states object

Attributes | Type | Description
--------- | ------- | -----------
field | string | The property/column you want to search against (see any major endpoint object like Shops for properties)
search | string | The search string (uses a wildcard in front and behind)