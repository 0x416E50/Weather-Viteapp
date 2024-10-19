import { useEffect, useState } from "react";
import Inputs from "./components/Inputs";
import TempAndDetails from "./components/TempAndDetails";
import TimeAndLocation from "./components/TimeAndLocation";
import TopButtons from "./components/TopButtons";
import getFormattedWeatherData from "./services/weatherService";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const App = () => {
  const [query, setQuery] = useState({ q: "ahmedabad" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  const [threshold,setThreshold]=useState(35);
  const [cityName, setCityName]=useState("");

  const getWeather = async () => {
    const cityName = query.q ? query.q : "current location";
    toast.info(`Fetching weather data of ${capitalizeFirstLetter(cityName)}`);
    setCityName(cityName);

    await getFormattedWeatherData({ ...query, units }).then((data) => {
      toast.success(`Fetched weather data of ${data.name}, ${data.country}`);
      setWeather(data);
    });
    console.log(data);
  };

  useEffect(() => {
    getWeather();
    const intervalId = setInterval(() => {
      getWeather();
    }, 300000);
  }, [query, units]);

  return (
    <div
    className="mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br from-orange-400 to-blue-400 shadow-xl shadow-gray-400"
    >
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} setUnits={setUnits} setThreshold={setThreshold} />

      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TempAndDetails weather={weather} units={units} />
        </>
      )}
      <ToastContainer autoClose={2500} hideProgressBar={true} theme="colored" />
    </div>
  );
};

export default App;