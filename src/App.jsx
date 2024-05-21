/* eslint-disable no-unused-vars */
import './App.css';
import backgroundImg from '../public/background.png';
import Temperature from './Components/Temperature/Temperature';
import Wind from './Components/Wind/Wind';
import AirPollutionQuality from './Components/AirPollutionQuality/AirPollutionQuality';
import Weather from './Components/Weather/Weather';
import Loacation from './Components/Loacation/Loacation';
import { useQuery } from '@tanstack/react-query';
import retriveWeatherData from './api/WeatherAPI';
import { useState } from 'react';
import Forecast from './Components/Forecast/Forecast';


function App() {
  const [location, setLocation] = useState('Dhaka');



  const { data: weatherData, error, isLoading, refetch } = useQuery({
    queryKey: ["weather", location],
    queryFn: () => retriveWeatherData(location),

  });


  const handleRetry = () => {
    refetch();
  };


  

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
            ) : error ? (
              <div className='flex flex-col items-center'>
                <p className='text-red-500 text-lg'>
                  No Location Found Name - {location}
                </p>
                <button
                  onClick={handleRetry}
                  className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'
                >
                  Retry
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-10 2xl:px-20">
                {/* Location */}
                <Loacation setLocation={setLocation} locationData={weatherData.location}></Loacation>
                {/* Current Weather */}
                <Weather weather={weatherData.current.condition}></Weather>
                {/* Current Temperature */}
                <Temperature tempData={weatherData.current}></Temperature>
                {/* Air Pollution & Quality */}
                <AirPollutionQuality detailedWeatherData={weatherData.current}></AirPollutionQuality>

                {/* Forecast */}
                <Forecast forecastData={weatherData.forecast}></Forecast>
                {/* Wind */}
                <Wind windData={weatherData.current}></Wind>


              </div>
            )
          }



        </div>
      </main>
    </div>
  );
}

export default App;
