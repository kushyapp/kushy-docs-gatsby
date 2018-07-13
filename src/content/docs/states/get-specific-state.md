---
title: Get specific states
route: "/states/:state"
method: "get"
page_type: "api"
last_updated: "2018-07-13"
---

```shell
  curl "https://kushy.net/api/v1/states/california"
```

```javascript
var api = 'https://kushy.net/api/v1/states/california';
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
$apiEndpoint = 'states/california';

$response = $client->request('GET', $apiEndpoint);
$response = json_decode($response->getBody()->getContents(), true);

echo 'State Name'. $response['title'];
echo 'State Slug'. $response['slug'];
foreach($response['cities'] as $city) {
    echo $city
}
?>
```

> The above command returns JSON structured like this:

```json
{
    title: "California",
    slug: "california",
    abbreviation: "ca",
    description: "<p>California legalized medical marijuana for patients suffering from acceptable conditions with Proposition 215 on November 5th, 1996, amended their medical marijuana program with Senate Bill 420 in 2003, and legalized recreational cannabis for all adults over 21 with Proposition 64 in 2016.</p> <p>There are over 2,100 medical dispensaries operating licensed or illegally in California today. There are no recreational shops licensed or operating as of yet.</p>",
    cities: {
        santaAna: {
            title: "Santa Ana",
            slug: "santa-ana",
            description: "Measure M and X",
            lat: 33.719657,
            lng: -117.852899
        },
        losAngeles: {
            title: "Los Angeles",
            slug: "los-angeles",
            description: "",
            lat: 34.0522,
            lng: -118.2437
        },
        sanFrancisco: {
            title: "San Francisco",
            slug: "san-francisco",
            description: "",
            lat: 37.7749,
            lng: -122.4194
        },
        sanDiego: {
            title: "Santa Diego",
            slug: "san-diego",
            description: "",
            lat: 32.7157,
            lng: -117.1611
        },
        sacramento: {
            title: "Sacramento",
            slug: "sacramento",
            description: "",
            lat: 38.5816,
            lng: -121.4944
        },
        longBeach: {
            title: "Long Beach",
            slug: "long-beach",
            description: "",
            lat: 33.7701,
            lng: -118.1937
        },
        sanJose: {
            title: "San Jose",
            slug: "san-jose",
            description: "",
            lat: 37.329699,
            lng: -121.883339
        },
        anaheim: {
            title: "Anaheim",
            slug: "anaheim",
            description: "",
            lat: 33.831361,
            lng: -117.910878
        },
        riverside: {
            title: "Riverside",
            slug: "riverside",
            description: "",
            lat: 33.948844,
            lng: -117.397127
        },
        sanBernardino: {
            title: "San Bernardino",
            slug: "san-bernardino",
            description: "",
            lat: 34.104237,
            lng: -117.290527
        },
        bakersfield: {
            title: "Bakersfield",
            slug: "bakersfield",
            description: "",
            lat: 35.334901,
            lng: -119.06058
        },
        vanNuys: {
            title: "Van Nuys",
            slug: "van-nuys",
            description: "",
            lat: 34.199865,
            lng: -118.454795
        }
    }
}
```

This endpoint retrieves a specific state and cities.

### HTTP Request

`GET https://kushy.net/api/v1/shops/<STATE>`

### URL Parameters

Parameter | Description
--------- | -----------
STATE | Full name of state in camelCase.

### The state object

Attributes | Type | Description
--------- | ------- | -----------
title | string | The state name
slug | string | Slug version of state name
abbreviation | string | Abbreviated version of state
description | string | Description of the state
cities | object | Contains city objects (see below) labeled by city name in camelCase

### The city object

Attributes | Type | Description
--------- | ------- | -----------
title | string | The city name
slug | string | Slug version of city name
description | string | Description of the city
lat | number | Latitude of the city
lng | number | Longitude of the city