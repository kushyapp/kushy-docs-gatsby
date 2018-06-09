---
title: Get all shops
route: "/shops/"
method: "get"
page_type: "api"
last_updated: "2018-04-05"
---

```shell
  curl "http://kushy.net/api/v3/shops/"
```

```javascript
var api = 'http://kushy.net/api/v1/shops/';
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
$api = 'http://kushy.net/api/v1/shops/';
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => $api,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_HTTPHEADER => array(
    "cache-control: no-cache"
  ),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);
$response = json_decode($response, true);
echo 'Shop Name'. $response['data'][0]['name'];
?>
```

> The above command returns JSON structured like this:

```json
{
    data: [
        {
            id: "09e4b270-5c99-11e8-aaf1-cd90abb01fbb",
            name: "AHHS WEST HOLLYWOOD",
            slug: "ahhs-west-hollywood",
            categories: [
                {
                    category_id: 3,
                    category: {
                        id: 3,
                        name: "Recreational Shop",
                        slug: "recreational-shop",
                        section: null,
                        parent: 0
                    }
                },
                {
                    category_id: 1,
                    category: {
                        id: 1,
                        name: "Medical Marijuana Dispensary",
                        slug: "medical-marijuana-dispensary",
                        section: null,
                        parent: 0
                    }
                }
            ],
            avatar: "https://kushy-frontend-assets.s3.amazonaws.com/uploads/business/avatars/shops/fHgN3Pbftxihgm0UauAFRqNuqfpfSm8FMU28tyxR.jpeg",
            featured_img: "https://kushy-frontend-assets.s3.amazonaws.com/uploads/business/featured/shops/igoyQchXvHAanXT5EwsTrUzd3eE9JcIdJ8hT62Jx.jpeg",
            rating: 0,
            featured: 0,
            verified: 0,
            location: {
                latitude: "34.0906030",
                longitude: "-118.3602417",
                address: "7828 Santa Monica Boulevard",
                state: "California",
                city: "West Hollywood",
                postal_code: "90046-5303",
                country: "United States"
            }
        },
    ]
}
```

This endpoint retrieves all shops.

### HTTP Request

`GET http://kushy.net/api/v3/shops/?<FILTER><LIMIT>`

### The strain object

Attributes | Type | Description
--------- | ------- | -----------
id | string | ID of shop
name | string | The shop name
slug | string | Slug for the shop (used for URLs)
categories | array | Array of category objects
avatar | string | URL to the shop's avatar
featured_img | string| URL to the shop's featured image
rating | integer | The shop's overall average review rating
featured | boolean | Is shop featured?
verified | boolean | Is shop verified?
location | object | Contains coordinates and address data


### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
filters | null | Set filter parameters (see filter section for more info)
region | null | Set region parameters (see region section below)
limit | 20 | Sets the number of items retrieved. Max is 20.