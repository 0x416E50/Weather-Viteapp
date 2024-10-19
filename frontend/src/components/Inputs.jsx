import { useState } from "react";
import { BiSearch, BiCurrentLocation } from "react-icons/bi";

const Inputs = ({ setQuery, setUnits, setThreshold }) => {
  const [city, setCity] = useState("");
  const [thre,setThre]=useState();

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleThreSHold=()=>{
    setThreshold(thre);
  }

  const hanldeLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setQuery({ lat: latitude, lon: longitude });
      });
    }
  };

  return (
    <>
      <div className="flex flex-row justify-center my-6">
        <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
          <input
            value={city}
            onChange={(e) => setCity(e.currentTarget.value)}
            type="text"
            placeholder="search by city"
            className="text-gray-700 text-xl font-light p-2 w-full shadow-xl capitalize focus:outline-none placeholder:lowercase placeholder:italic"
          />
          <BiSearch
            size={30}
            className="cursor-pointer transition ease-out hover:scale-100"
            onClick={handleSearchClick}
          />
          <BiCurrentLocation
            size={30}
            className="cursor-pointer transition ease-out hover:scale-100"
            onClick={hanldeLocationClick}
          />
        </div>

        <div className="flex flex-row w-1/4 items-center justify-center">
          <button
            className="text-2xl font-medium transition ease-out hover:scale-110"
            onClick={() => setUnits("metric")}
          >
            °C
          </button>
          <p className="text-2xl font-medium mx-1">|</p>

          <button
            className="text-2xl font-medium transition ease-out hover:scale-110"
            onClick={() => setUnits("")}
          >
            °K
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center\">
        <input
          value={thre}
          onChange={(e) => setThre(e.currentTarget.value)}
          type="text"
          placeholder="Threshold temperature"
          className="text-gray-700 text-xl font-light p-2 w-26 shadow-xl capitalize focus:outline-none placeholder:lowercase placeholder:italic"
        />
        <button
          onClick={handleThreSHold}
        className="mx-8 white text-black bg-white rounded-full w-40 h-10 transition ease-out   hover:scale-110"> set threshold </button>
      </div>
    </>
  );
};

export default Inputs;