---
title: Authorization
route: "/authorization/application"
page_type: "page"
last_updated: "2018-04-05"
---

The client credentials flow is used when an application needs to obtain permission to act on its own behalf. An application will exchange it’s client_id, client_secret, and grant_type=client_credentials for an application access token. An application access token can then be used to make calls to the Dwolla API on behalf of the application, for example, create a webhook subscription, retrieve events, and make calls to Dwolla API Customer related endpoints. The primary reason for obtaining an application access token is for managing webhooks and events. However, Dwolla has modified this grant type by allowing applications to access Dwolla API Customer related endpoints using the application access token.


The client credentials flow is used when an applicated needs to obtain permission from a user to use the Kushy API through their account. This gives an application access to a user's more private data and actions, such as creating or deleting a review. There are limitations to the level of access for authorized API requests based on the logged in user's permissions (business, admin, etc), and **scopes** applied during the initial authorization request. 

## Process

1. [Create an app](https://kushy.net/developers/apps) in the Kushy Developers section
2. Create a route at the callback URL you provided that sends POST data to the API endpoint [https://kushy.net/oauth/token](https://kushy.net/oauth/token). Make sure to swap your `client_id`, `client_secret`, and `redirect_uri`:
```php
$response = (new GuzzleHttp\Client)->post('https://kushy.net/oauth/token', [
    'form_params' => [
        'grant_type' => 'authorization_code',
        'client_id' => '6',
        'client_secret' => 'q1w51ti3M0Mc79nTDkvQvpv2A8uvKDqpSJRMWlzK',
        'redirect_uri' => 'http://127.0.0.1:8001/callback',
        'code' => $request->code,
    ]
]);
```
3. In the same callback route, grab the `access_token` from the API response. Keep it somewhere in your app for use later, like the user's session or local storage.
```php
session()->put('token', json_decode((string) $response->getBody(), true));
```

4. When you'd like to login a user via OAuth, redirect user to the following URL, making sure to change the `client_id` and `redirect_uri` with Client ID and callback URL you provided when creating your new app: https://kushy.net/oauth/authorize?client_id=420&redirect_uri=http://127.0.0.1:8001/callback&response_type=code

5. The user will be taken to Kushy.net for authorization. If the user is not logged in, they'll be prompted to login first. After logging in, the user will redirected to an application authorization form where they can accept or deny your app.

6. After accepting your app, the user will be redirected to the callback URL you specified above. If your POST request succeeds, you'll receive the user's secret access token. You can use this token in your headers to make authenticated API requests (`Authorization: Bearer token-would-be-here`).

7. Make authenticated API requests on the user's behalf!
```php
$response = (new GuzzleHttp\Client)->get('https://kushy.net/api/v1/user', [
    'headers' => [
        'Authorization' => 'Bearer '.Session::get('token.access_token')
    ]
]);
```

## Authorization

### Request parameters

Parameter | Required | Type | Description
--------- | ------- | ------- | -----------
client_id | Yes | string | Application key.
redirect_uri | Yes | string | The callback URL.
response_type | Yes | string | Direct the response type. 'code' is recommended
scope | No | string | Comma separated keys that grant extra API access

### Response parameters

Parameter | Description
--------- | -----------
code | An authorization hash part of the OAuth protocol. Used in Token request.

## Token

### Request parameters

Parameter | Required | Type | Description
--------- | ------- | ------- | -----------
grant_type | Yes | string | authorization_code
client_id | Yes | string | Application key.
client_secret | Yes | string | Application secret.
redirect_uri | Yes | string | The callback URL.
code | An authorization hash part of the OAuth protocol. From the Authorization request.

### Response parameters

Parameter | Description
--------- | -----------
token | A token object with user access data
token.access_token | The user's private access token (JWT) for authenticating API requests on behalf of the user