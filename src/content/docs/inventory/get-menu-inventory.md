---
title: Get inventory of specific shop/brand
route: "/inventory/menu/:slug"
method: "get"
page_type: "api"
last_updated: "2018-07-13"
---

```shell
  curl "https://kushy.net/api/v1/inventory/shop/chronic-pain-relief-center"
```

```javascript
var api = 'https://kushy.net/api/v1/inventory/shop/chronic-pain-relief-center';
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
$apiEndpoint = 'inventory/shop/chronic-pain-relief-center';

$response = $client->request('GET', $apiEndpoint);
$response = json_decode($response->getBody()->getContents(), true);

echo 'Menu Last Updated'. $response['menuLastUpdated'];
foreach($response['data'] as $item) {
    echo $item->name;
}
?>
```

> The above command returns JSON structured like this:

```json
{
    menuLastUpdated: "2 months ago ",
    data: [
        {
            inventory_id: "02511a40-5d23-11e8-aef7-c9ce3473ffa0",
            product_id: "013f7600-5d23-11e8-b9db-0790bff71e16",
            name: "Gods Gift",
            slug: "chronic-pain-relief-center-gods-gift",
            categories: [
                "Flowers"
            ],
            avatar: null,
            featured_img: "https://kushy-frontend-assets.s3.amazonaws.com/uploads/products/featured/Ufe3DlP9swhEYulg8L0ORaoTedVhUTSg9cmhg06n.jpeg",
            description: null,
            pricing: {
                pricing_type: "",
                list_price: "0.00",
                sale_price: "0.00",
                half_gram: "0.00",
                one_gram: "18.00",
                two_grams: "0.00",
                eighth_ounce: "50.00",
                quarter_ounce: "100.00",
                half_ounce: "195.00",
                ounce: "365.00",
                quarter_pound: "0.00",
                half_pound: "0.00",
                pound: "0.00"
            },
            cannabinoids: {
                thc: "0.00",
                cbd: "0.00",
                cbn: "0.00"
            }
        },
    }
```

This endpoint retrieves a specific shops inventory (aka menu).

### HTTP Request

`GET https://kushy.net/api/v1/inventory/shop/<SLUG>`

### The states object

Attributes | Type | Description
--------- | ------- | -----------
slug | string | Slug of shop or brand