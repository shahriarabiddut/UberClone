# UberClone

UberClone is a feature-rich ride-hailing application inspired by Uber, designed to replicate its core functionalities. This project is an excellent learning tool and serves as a foundation for building scalable, real-world ride-sharing applications.

## 🚀 Features

- **User Authentication**: Secure login and signup for riders and drivers.
- **Ride Requests**: Riders can book rides with real-time fare estimation.
- **Driver Matching**: Efficient algorithms to match riders with nearby drivers.
- **Live Tracking**: Real-time location updates for both riders and drivers.
- **Payment Integration**: Support for multiple payment methods.
- **Admin Dashboard**: Tools for managing users, rides, and earnings.

## 🛠️ Tech Stack

- **Frontend**: React Native for cross-platform mobile development.
- **Backend**: Node.js with Express for server-side logic.
- **Database**: MongoDB for scalable data storage.
- **Maps**: Google Maps API for navigation and location tracking.
- **Payments**: Stripe or Razorpay for seamless payment processing.

## 📂 Project Structure

```
UberClone/
├── frontend/           # React Native app
├── backend/            # Node.js API
│   ├── controllers/    # Controllers for handling requests
│   ├── models/         # Mongoose models
│   ├── routes/         # Express routes
│   ├── middlewares/    # Custom middleware functions
│   ├── server.js       # Entry point for the backend server
│   └── package.json    # Backend dependencies and scripts
├── backend/db/         # MongoDB configurations
└── docs/               # Documentation and assets
```

## 🕒 Timeline

- **Initial Commit**: Project setup with basic folder structure.
- **Server Setup**: Configured Express server and MongoDB connection.
- **DB Setup**: Created initial MongoDB schemas and models.
- **User Model and Controller**: Implemented user model and basic user controller.
- **User Registration and Login**: Added user registration and login functionality with JWT authentication.
- **Middleware and Blacklist Token**: Implemented middleware for authentication and token blacklisting.
- **User Profile and Logout**: Developed user profile view and logout functionality with token blacklisting.
- **Captain Registration,**: Added captain (driver) registration feature.
- **Captain Middleware and Blacklist Token**: Implemented middleware for authentication and token blacklisting for Captain.
- **Captain Login, Profile and Logout**: Developed captain login , profile view and logout functionality with token blacklisting.
- **FrontEnd** : Project Setup and Homepage Design!
