---
title: Create new shop
route: "/shops/"
method: "post"
page_type: "api"
last_updated: "2018-04-05"
---

```javascript
// const avatarFile = an image input
// const featuredFile = an image input
let formData = {
    // Required fields
    name: 'Green Hills Dispensary',
    category: '1, 2,'

    // Optional fields
    newAvatar: avatarFile,
    newFeatured: featuredFile,
    meta: {
        website: "http://greenhilldispensary.com",
        email: "greenhills420@gmail.com",
    },
    latitude: "34.0906030",
    longitude: "-118.3602417",
    address: '420 NE Ave',
    city: 'Los Angeles',
    state: 'CA',
    postal_code: '92810',
    country: 'USA',
}

postData('http://kushy.net/api/v1/shops/', formData)
  .then(data => console.log(data)) // JSON from `response.json()` call
  .catch(error => console.error(error))

function postData(url, data) {
  return fetch(url, {
    body: JSON.stringify(data), 
    cache: 'no-cache', 
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json'
      'Authorization': "Bearer " + myToken,
    },
    method: 'POST', 
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
$response = $client->request('POST', 'http://kushy.net/api/v1/shops/', [
    'multipart' => [
        [
            // Required fields
            'name' => 'Green Hills Dispensary',
            'category' => '1, 2,'

            // Optional fields
            'meta' => [
                'website' => "http://greenhilldispensary.com",
                'email' => "greenhills420@gmail.com",
            ],
            'latitude' => "34.0906030",
            'longitude' => "-118.3602417",
            'address' => '420 NE Ave',
            'city' => 'Los Angeles',
            'state' => 'CA',
            'postal_code' => '92810',
            'country' => 'USA',
        ],
        // Optional image fields
        [ 'newAvatar' => $avatarFile ],
        [ 'newFeatured' => $featuredFile ],
    ],
    'headers'         => [
        'Accept'        => 'application/json',
        'Authorization' => "Bearer $myToken"
    ]
]);
?>
```

This endpoint creates a new shop. 

### HTTP Request

`POST http://kushy.net/api/v1/shops/`

### Form Parameters

Attributes | Required | Type | Description
--------- | --------- | ------- | -----------
name | Yes | string | The shop name
categories | Yes | array | Array of category objects
newAvatar | No | file | Image file (JPG, PNG, GIF) under 420kb
newFeatured | No | file | Image file (JPG, PNG, GIF) under 420kb
latitude | No | integer | Latitude
longitude | No | object | Longitude
address | No | string | Street address
city | No | string | City name
state | No | string | State name, preferably abbreviated
postal_code | No | integer | Postal code
country | No | string | Country, preferably abbreviated
meta | No | array | Country, preferably abbreviated
meta[email] | No | string | Email address
meta[website] | No | string | Website URL

See the GET /shops/ route for more information about attributes (name, lat/lng, etc).

### Authorization

All requests require an OAuth access token and Admin level access. OAuth access tokens are passed via the `Authorization` HTTP header:

`Authorization: Bearer {access_token_here}`