/* eslint-disable no-unused-vars */
import './App.css';
import backgroundImg from '../public/background.png';
import Temperature from './Components/Temperature/Temperature';
import Wind from './Components/Wind/Wind';
import AirPollutionQuality from './Components/AirPollutionQuality/AirPollutionQuality';
import Weather from './Components/Weather/Weather';
import Loacation from './Components/Loacation/Loacation';
import { useQuery } from '@tanstack/react-query';
// import retriveWeatherData from './api/WeatherAPI';
import { useState } from 'react';
import axios from 'axios';


function App() {
  const [location, setLocation] = useState('Dhaka');


  const retriveWeatherData = async (location) => {
    const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=617b6d309c82448ab2c123316242005&q=${location}&aqi=no`);

    return response.data
  }

  const { data: weatherData, error, isLoading } = useQuery({
    queryKey: ["weather", location],
    queryFn: () => retriveWeatherData(location),

  });


  if (error) return <div>{error.message}</div>


  console.log(location)
  console.log(weatherData)
  return (
    <div className="wrapper">
      <img src={backgroundImg} className="bg-img" alt="background" />
      <div className="overlay"></div>

      <main className="!z-50 w-full lg:px-0 px-5">
        <div className="container mx-auto backdrop-blur-sm ">


          {
            isLoading ? (
              <div className='flex space-x-2 justify-center items-center'>
                <span className='sr-only'>Loading...</span>
                <div className='h-8 w-8 bg-white rounded-full animate-bounce [animation-delay:-0.3s]'></div>
                <div className='h-8 w-8 bg-white rounded-full animate-bounce [animation-delay:-0.15s]'></div>
                <div className='h-8 w-8 bg-white rounded-full animate-bounce'></div>
              </div>
            ) : (
              <div className="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-10 2xl:px-20">
                {/* location */}
                <Loacation setLocation={setLocation} locationData={weatherData.location}></Loacation>
                {/* Current Weather */}
                <Weather weather={weatherData.current.condition}></Weather>
                {/* Air Pollution & Quality */}
                <AirPollutionQuality detailedWeatherData={weatherData.current}></AirPollutionQuality>
                {/* Wind */}
                <Wind windData={weatherData.current}></Wind>
                {/* Current Temperature */}
                <Temperature tempData={weatherData.current}></Temperature>
              </div>
            )
          }


        </div>
      </main>
    </div>
  );
}

export default App;
