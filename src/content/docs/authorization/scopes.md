---
title: Scopes
route: "/authorization/scopes"
page_type: "page"
last_updated: "2018-04-07"
---

Scopes are keys you can provide in your parameters to request greater access from the user, such as patient verification status. During the login process, the user will see that your app has requested additional permissions on their account based on these scopes, and be able to accept or deny based on that data.


### List of Scopes

key | Description
--------- | -----------
access-email | Grants access to the email in the user endpoint.
patient-verfication | Grants access to the patient verification status boolean in the user endpoint.