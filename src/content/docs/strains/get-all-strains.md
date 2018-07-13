---
title: Get all strains
route: "/strains/"
method: "get"
page_type: "api"
last_updated: "2018-04-05"
---

```shell
  curl "http://kushy.net/api/v1/strains/"
```

```javascript
var api = 'http://kushy.net/api/v1/strains/';
var xmlhttp;
xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
      strains = JSON.parse(this.responseText);
      console.log(strains);
    }
}
xmlhttp.open("GET", api, true);
xmlhttp.send();
```

```php
<?php
$api = 'http://api.kushy.net/api/v3/strains/';
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
echo 'Strain Name'. $response['data'][0]['name'];
?>
```

> The above command returns JSON structured like this:

```json
[
  meta: {
    table: "strains",
    type: "collection",
    total: 20,
    total_entries: 0
  },
  data: [
    {
      id: 1,
      status: 1,
      sort: 0,
      name: "100 OG",
      slug: null,
      image: "http://fadedfools.com/medical_marijuana/100dollar_og_kush.jpg",
      description: "<p>This strain is named after it's high price in it's Hollywood home. As a 50/50 hybrid of indica and sativa, $100 OG does a great job offering pain relief with an alert, cerebral high.</p>",
      type: "Hybrid",
      crosses: "",
      breeder: "Old School Breeder's Association",
      effects: "Focused",
      ailment: "Depression",
      flavor: "Citrus",
      location: null,
      terpenes: "Limonene",
      thc: 127,
      thca: 0,
      thcv: 0,
      cbd: 16,
      cbda: 0,
      cbdv: 0,
      cbn: 10,
      cbg: 0,
      cbgm: 0,
      cbgv: 0,
      cbc: 0,
      cbcv: 0,
      cbv: 0,
      cbe: 0,
      cbt: 0,
      cbl: 0
    }]
  }
]
```

This endpoint retrieves all strains.

### HTTP Request

`GET http://kushy.net/api/v1/strains/?<FILTER><LIMIT>`

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
filters | null | Set filter parameters (see filter section for more info)
limit | 20 | Sets the number of items retrieved. Max is 20.