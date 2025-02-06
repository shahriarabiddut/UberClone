import React from "react";

const LocationSearchPanel = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-start gap-4">
        <h2 className="text-xl font-semibold bg-gray-200 h-9 w-11 flex justify-center items-center rounded-full">
          <i className="ri-map-pin-line"></i>
        </h2>
        <h4 className="text-xl font-medium">Dhanmondi , Dhaka</h4>
      </div>
      <div className="flex items-center justify-start gap-4">
        <h2 className="text-xl font-semibold bg-gray-200 h-9 w-11 flex justify-center items-center rounded-full">
          <i className="ri-map-pin-line"></i>
        </h2>
        <h4 className="text-xl font-medium">Kalshi Mor , Dhaka</h4>
      </div>
      <div className="flex items-center justify-start gap-4">
        <h2 className="text-xl font-semibold bg-gray-200 h-9 w-11 flex justify-center items-center rounded-full">
          <i className="ri-map-pin-line"></i>
        </h2>
        <h4 className="text-xl font-medium">Mohammadpur , Dhaka</h4>
      </div>
      <div className="flex items-center justify-start gap-4">
        <h2 className="text-xl font-semibold bg-gray-200 h-9 w-11 flex justify-center items-center rounded-full">
          <i className="ri-map-pin-line"></i>
        </h2>
        <h4 className="text-xl font-medium">KhilKhet , Dhaka</h4>
      </div>
      <div></div>
    </div>
  );
};

export default LocationSearchPanel;
