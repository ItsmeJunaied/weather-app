import './App.css';
import backgroundImg from '../public/background.png';
import Temperature from './Components/Temperature/Temperature';
import Wind from './Components/Wind/Wind';
import AirPollutionQuality from './Components/AirPollutionQuality/AirPollutionQuality';
import Weather from './Components/Weather/Weather';
import Loacation from './Components/Loacation/Loacation';


function App() {
  return (
    <div className="wrapper">
      <img src={backgroundImg} className="bg-img" alt="background" />
      <div className="overlay"></div>

      <main className="!z-50 w-full">
        <div className="container mx-auto backdrop-blur-sm ">
          <div className="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20 2xl:px-20">

            {/* location */}
            <Loacation></Loacation>

            {/* Current Weather */}
            <Weather></Weather>

            {/* Air Pollution & Quality */}
            <AirPollutionQuality></AirPollutionQuality>

            {/* Wind */}
            <Wind></Wind>

            {/* Current Temperature */}
            <Temperature></Temperature>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
