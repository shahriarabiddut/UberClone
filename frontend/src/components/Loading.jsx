import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-blue-500 blur-xl opacity-30 animate-pulse"></div>
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loading;
