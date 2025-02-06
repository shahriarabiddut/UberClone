# User Registration Endpoint

## POST /users/register

### Description

This endpoint is used to register a new user. It validates the input data, hashes the password, creates a new user in the database, and returns an authentication token.

### Request Body

The request body should be a JSON object with the following properties:

- `fullname`: An object containing:
  - `firstname`: A string with at least 3 characters (required)
  - `lastname`: A string with at least 3 characters (optional)
- `email`: A valid email address (required)
- `password`: A string with at least 8 characters (required)

Example:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses

#### Success

- **Status Code**: 201 Created
- **Response Body**:
  ```json
  {
    "token": "jwt-auth-token",
    "user": {
      "_id": "user-id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "socketId": null
    }
  }
  ```

#### Validation Errors

- **Status Code**: 400 Bad Request
- **Response Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email!",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "First Name must be at least 3 characters!",
        "param": "fullname.firstname",
        "location": "body"
      },
      {
        "msg": "Password must be at least 8 characters Long!",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

#### Server Errors

- **Status Code**: 500 Internal Server Error
- **Response Body**:
  ```json
  {
    "error": "Internal Server Error"
  }
  ```

# User Login Endpoint

## POST /users/login

### Description

This endpoint is used to authenticate an existing user. It validates the input data, checks the user's credentials, and returns an authentication token.

### Request Body

The request body should be a JSON object with the following properties:

- `email`: A valid email address (required)
- `password`: A string with at least 8 characters (required)

Example:

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses

#### Success

- **Status Code**: 200 OK
- **Response Body**:
  ```json
  {
    "token": "jwt-auth-token",
    "user": {
      "_id": "user-id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "socketId": null
    }
  }
  ```

#### Validation Errors

- **Status Code**: 400 Bad Request
- **Response Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email!",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "Password must be at least 8 characters Long!",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

#### Authentication Errors

- **Status Code**: 401 Unauthorized
- **Response Body**:
  ```json
  {
    "message": "Invalid Email or Password!"
  }
  ```

#### Server Errors

- **Status Code**: 500 Internal Server Error
- **Response Body**:
  ```json
  {
    "error": "Internal Server Error"
  }
  ```

# User Profile Endpoint

## GET /users/profile

### Description

This endpoint is used to get the profile of the authenticated user.

### Request Headers

- `Authorization`: Bearer token (required)

Example:

```http
GET /users/profile HTTP/1.1
Host: localhost:5000
Authorization: Bearer jwt-auth-token
```

### Responses

#### Success

- **Status Code**: 200 OK
- **Response Body**:
  ```json
  {
    "user": {
      "_id": "user-id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "socketId": null
    }
  }
  ```

#### Authentication Errors

- **Status Code**: 401 Unauthorized
- **Response Body**:
  ```json
  {
    "message": "Authentication required!"
  }
  ```

#### Server Errors

- **Status Code**: 500 Internal Server Error
- **Response Body**:
  ```json
  {
    "error": "Internal Server Error"
  }
  ```

# User Logout Endpoint

## GET /users/logout

### Description

This endpoint is used to log out the authenticated user.

### Request Headers

- `Authorization`: Bearer token (required)

Example:

```http
GET /users/logout HTTP/1.1
Host: localhost:5000
Authorization: Bearer jwt-auth-token
```

### Responses

#### Success

- **Status Code**: 200 OK
- **Response Body**:
  ```json
  {
    "message": "Logged Out Successfully!"
  }
  ```

#### Authentication Errors

- **Status Code**: 401 Unauthorized
- **Response Body**:
  ```json
  {
    "message": "Authentication required!"
  }
  ```

#### Server Errors

- **Status Code**: 500 Internal Server Error
- **Response Body**:
  ```json
  {
    "error": "Internal Server Error"
  }
  ```
