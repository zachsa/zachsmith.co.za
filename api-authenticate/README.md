# Authentication service
This service confirms or denies the identity of a user. On identity confirmation, the client will receive an authentication token. Otherwise a 401 error code is returned.

## GET /login
Requests to this endpoint result in an HTML login page being returned to a user

## POST /authenticate
Accepts either the form data from the `/login` form, or accepts an authentication token.

If login data is received, validity of the username & password combination is checked against the table `Users`. If the username/password combination is correct, then an authentication token is returned.

If an authentication token is received, it is checked for validity. If the token is valid, a 200 status code is returned, Otherwise a 401 error is returned.

## POST /refresh-token
Accepts an authentication token

- If the token is valid, a new authentication token is created
- If the token is not valid, And if that user is explicitly allowed to auto-renew tokens, then a new authentication token is provided. 