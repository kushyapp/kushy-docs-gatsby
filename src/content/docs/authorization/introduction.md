---
title: Authorization
route: "/authorization/"
page_type: "page"
last_updated: "2018-04-05"
---

Kushy utilizes the OAuth 2 protocol to facilitate authorization. OAuth is an authorization framework that enables a third-party application to obtain access to protected resources (e.g. Admin or Business level access) in the Kushy API. Access to the Kushy API can be granted to an application either on behalf of a user or on behalf of the application itself. This section covers application auth which is meant for server-to-server applications using the Kushy API.

## Creating an application

Before you can get started with making OAuth requests, you’ll need to first register an application with Kushy by logging in and navigating to [the applications page](https://kushy.net/developers/apps). Once an application is registered you will obtain your `client_id`, `callback_url`, and `client_secret` (aka App Key and Secret), which will be used to identify your application when calling the Kushy API. Learn more in our getting started guide. 

> Remember: Your `client_secret` should be kept a secret! Be sure to store your client credentials securely.

## Token lifetime

Access tokens are short lived: 1 hour. To refresh authorization on an application access token, your application will simply exchange its client credentials for a new app access token which will invalidate the previous token.