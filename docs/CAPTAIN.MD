# Captain Registration Endpoint

## POST /captains/register

### Description

This endpoint is used to register a new captain. It validates the input data, hashes the password, creates a new captain in the database, and returns an authentication token.

### Request Body

The request body should be a JSON object with the following properties:

- `fullname`: An object containing:
  - `firstname`: A string with at least 3 characters (required)
  - `lastname`: A string with at least 3 characters (optional)
- `email`: A valid email address (required)
- `password`: A string with at least 8 characters (required)
- `vehicle`: An object containing:
  - `color`: A string with at least 3 characters (required)
  - `plate`: A string with at least 3 characters (required)
  - `capacity`: A number with at least 1 character (required)
  - `type`: A string that must be one of "car", "motorcycle", or "cng" (required)

Example:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "type": "car"
  }
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
      "socketId": null,
      "vehicle": {
        "color": "Red",
        "plate": "ABC123",
        "capacity": 4,
        "type": "car"
      }
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
        "msg": "Password must be at least 8 characters long!",
        "param": "password",
        "location": "body"
      },
      {
        "msg": "Color must be at least 3 characters!",
        "param": "vehicle.color",
        "location": "body"
      },
      {
        "msg": "Plate must be at least 3 characters!",
        "param": "vehicle.plate",
        "location": "body"
      },
      {
        "msg": "Capacity must be at least 1 character!",
        "param": "vehicle.capacity",
        "location": "body"
      },
      {
        "msg": "Invalid Vehicle Type!",
        "param": "vehicle.type",
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
