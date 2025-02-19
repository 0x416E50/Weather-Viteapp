import React from "react";

const TopButtons = ({ setQuery }) => {
  const cities = [
    {
      id: 1,
      name: "Kolkata",
    },
    {
      id: 2,
      name: "Mumbai",
    },
    {
      id: 3,
      name: "Delhi",
    },
    {
      id: 4,
      name: "Chennai",
    },
    {
      id: 5,
      name: "Hyderabad",
    },
    {
      id: 6,
      name:"Bangalore"
    }
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-2xl font-medium hover:bg-orange-700/40 px-3 py-2 rounded-md transition ease-in"
          onClick={() => setQuery({ q: city.name })}
        >
          {city.name}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;