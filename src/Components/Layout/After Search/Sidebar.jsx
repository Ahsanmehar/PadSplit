import React, { useState } from "react";

const Sidebar = () => {
  const [minBudget, setMinBudget] = useState("");
  const [maxBudget, setMaxBudget] = useState("");
  const [showMoreRooms, setShowMoreRooms] = useState(false);
  const [showMoreAmenities, setShowMoreAmenities] = useState(false);

  return (
    <div className="w-full bg-white p-4 shadow-md rounded-lg">
      {/* Location Filter */}
      <h3 className="font-semibold mb-2">Location</h3>
      <div className="mb-4">
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="accent-blue-500" />
          <span>Lisbon</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="accent-blue-500" />
          <span>Porto</span>
        </label>
      </div>
      
      {/* Budget Filter */}
      <h3 className="font-semibold mb-2">Budget</h3>
      <div className="flex space-x-2 mb-4">
        <input 
          type="number" 
          placeholder="Min" 
          className="border p-2 rounded w-1/2" 
          value={minBudget} 
          onChange={(e) => setMinBudget(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder="Max" 
          className="border p-2 rounded w-1/2" 
          value={maxBudget} 
          onChange={(e) => setMaxBudget(e.target.value)} 
        />
      </div>
      
      {/* Room Type Filter */}
      <h3 className="font-semibold mb-2">Room Type</h3>
      <div className="mb-4">
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="accent-blue-500" />
          <span>Studio</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="accent-blue-500" />
          <span>Apartment</span>
        </label>
        {showMoreRooms && (
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="accent-blue-500" />
            <span>Private Room</span>
          </label>
        )}
        <button
          className="text-blue-500 text-sm mt-1"
          onClick={() => setShowMoreRooms(!showMoreRooms)}
        >
          {showMoreRooms ? "Show less" : "Show more"}
        </button>
      </div>
      
      {/* Amenities Filter */}
      <h3 className="font-semibold mb-2">Amenities</h3>
      <div className="mb-4">
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="accent-blue-500" />
          <span>Heating</span>
        </label>
        {showMoreAmenities && (
          <>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-blue-500" />
              <span>Dryer</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-blue-500" />
              <span>Air conditioning</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-blue-500" />
              <span>Washing Machine</span>
            </label>
          </>
        )}
        <button
          className="text-blue-500 text-sm mt-1"
          onClick={() => setShowMoreAmenities(!showMoreAmenities)}
        >
          {showMoreAmenities ? "Show less" : "Show more"}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
