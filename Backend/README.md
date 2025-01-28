# UberClone Backend

This is the backend for the UberClone application built with the MERN stack (MongoDB, Express, React, Node.js).

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shahriarabiddut/UberClone.git
   ```
2. Navigate to the backend directory:
   ```bash
   cd UberClone/Backend
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Configuration

1. Create a `.env` file in the root of the backend directory and add the following environment variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

### Running the Application

1. Start the MongoDB server:
   ```bash
   mongod
   ```
2. Start the backend server:
   ```bash
   npm start
   ```

The backend server should now be running on `http://localhost:5000`.

### API Endpoints

- `POST /users/register` - Register a new user
- `POST /users/login` - Login a user

### Dependencies

- cors: ^2.8.5
- dotenv: ^16.4.7
- express: ^4.21.2

### License

This project is licensed under the MIT License.

### Acknowledgements

- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Node.js](https://nodejs.org/)
