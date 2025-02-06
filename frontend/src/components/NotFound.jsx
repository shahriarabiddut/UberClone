import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      <h1 className="text-7xl font-bold text-blue-600">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mt-4">
        Page Not Found
      </h2>
      <p className="text-gray-600 mt-2">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 cursor-pointer"
      >
        Go Home
      </button>
      <div className="mt-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-30 absolute top-20 left-20"></div>
      <div className="mt-10 w-32 h-32 bg-blue-300 rounded-full blur-2xl opacity-20 absolute bottom-20 right-20"></div>
    </div>
  );
};

export default NotFound;
