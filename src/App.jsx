import './App.css';
import backgroundImg from '../public/background.png';
import Temperature from './Components/Temperature/Temperature';
import Wind from './Components/Wind/Wind';
import AirPollutionQuality from './Components/AirPollutionQuality/AirPollutionQuality';
import Weather from './Components/Weather/Weather';
import Loacation from './Components/Loacation/Loacation';
import { useQuery } from '@tanstack/react-query';
import retriveWeatherData from './api/WeatherAPI';


function App() {

  const { data: weatherData, error, isLoading } = useQuery({
    queryKey: ["weather"],
    queryFn: retriveWeatherData,

  });

  if (isLoading) return <div>Return Weather ....</div>
  if (error) return <div>{error.message}</div>


  console.log(weatherData);
  return (
    <div className="wrapper">
      <img src={backgroundImg} className="bg-img" alt="background" />
      <div className="overlay"></div>

      <main className="!z-50 w-full">
        <div className="container mx-auto backdrop-blur-sm ">
          <div className="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20 2xl:px-20">

            {/* location */}
            <Loacation locationData={weatherData.location}></Loacation>
            {/* Current Weather */}
            <Weather weather={weatherData.current.condition}></Weather>
            {/* Air Pollution & Quality */}
            <AirPollutionQuality detailedWeatherData={weatherData.current}></AirPollutionQuality>
            {/* Wind */}
            <Wind windData={weatherData.current}></Wind>
            {/* Current Temperature */}
            <Temperature tempData={weatherData.current}></Temperature>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
