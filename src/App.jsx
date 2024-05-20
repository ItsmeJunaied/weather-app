import './App.css';
import backgroundImg from '../public/background.png';
import linkIcon from '../public/link.svg';
import rainIcon from '../public/icon_rain.png';
import airElementIcon from '../public/icon_air_element.png';
import windIcon from '../public/icon_wind.png';
import temperatureIcon from '../public/icon_tempareture.png';

function App() {
  return (
    <div className="wrapper">
      <img src={backgroundImg} className="bg-img" alt="background" />
      <div className="overlay"></div>

      <main className="!z-50 w-full">
        <div className="container mx-auto backdrop-blur-sm ">
          <div className="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20 2xl:px-20">

            {/* location */}
            <div className="col-span-12 flex flex-col justify-end lg:col-span-8 2xl:col-span-9">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <h2 className="text-3xl font-bold text-white lg:text-4xl 2xl:text-[40px]">
                    North America
                  </h2>
                  <div className="relative">
                    <button>
                      <img className="size-9" src={linkIcon} alt="link icon" />
                    </button>
                    {/* <div className="absolute left-0 top-12 z-[999] w-full min-w-[280px] rounded-md bg-white p-4 shadow max-md:-translate-x-1/2">
                      <ul
                        role="list"
                        className="divide-y divide-gray-100 [&>*]:py-2 [&>li]:cursor-pointer"
                      >
                        <li>Kolkata</li>
                        <li>Dhaka</li>
                        <li>London</li>
                        <li>Amsterdam</li>
                      </ul>
                    </div> */}
                  </div>
                </div>
                <p className="text-lg text-[#C4C4C4] lg:text-xl">
                  United States of America | California
                </p>
                <div className="flex items-center gap-2 text-xs text-[#92B6F5] lg:text-sm">
                  <span>2:24 PM</span> <span>Monday, 12 February 2024</span>
                </div>
              </div>
            </div>

            {/* Current Weather */}
            <div className="col-span-12 lg:col-span-4 2xl:col-span-3">
              <div className="card">
                <h6 className="feature-name">Current Weather</h6>
                <div className="feature-main">
                  <img className="max-w-20" src={rainIcon} alt="rain icon" />
                  <h3 className="feature-title">Rain</h3>
                  <span className="feature-name">Moderate Rain</span>
                </div>
              </div>
            </div>

            {/* Air Pollution & Quality */}
            <div className="col-span-12 lg:col-span-4 2xl:col-span-6">
              <div className="card">
                <h6 className="feature-name">Air Pollution & Quality</h6>

                <div className="mt-3 space-y-2 lg:space-y-3">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
                      <img
                        className="max-w-[18px]"
                        src={airElementIcon}
                        alt="icon"
                      />
                      Air Quality Index
                    </div>
                    <span className="text-right text-sm text-white lg:text-base">
                      Good
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
                      <img
                        className="max-w-[18px]"
                        src={airElementIcon}
                        alt="icon"
                      />
                      Carbon Monoxide
                    </div>
                    <span className="text-right text-sm text-white lg:text-base">
                      201.94 µg/m³
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
                      <img
                        className="max-w-[18px]"
                        src={airElementIcon}
                        alt="icon"
                      />
                      Nitric Oxide
                    </div>
                    <span className="text-right text-sm text-white lg:text-base">
                      0.01877 ppm
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
                      <img
                        className="max-w-[18px]"
                        src={airElementIcon}
                        alt="icon"
                      />
                      Nitrogen Dioxide
                    </div>
                    <span className="text-right text-sm text-white lg:text-base">
                      0.7711 ppm
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
                      <img
                        className="max-w-[18px]"
                        src={airElementIcon}
                        alt="icon"
                      />
                      Ozone
                    </div>
                    <span className="text-right text-sm text-white lg:text-base">
                      68.664 µg/m³
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
                      <img
                        className="max-w-[18px]"
                        src={airElementIcon}
                        alt="icon"
                      />
                      Sulfur Dioxide
                    </div>
                    <span className="text-right text-sm text-white lg:text-base">
                      0.6407 ppm
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
                      <img
                        className="max-w-[18px]"
                        src={airElementIcon}
                        alt="icon"
                      />
                      PM2.5
                    </div>
                    <span className="text-right text-sm text-white lg:text-base">
                      0.5 µg/m³
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Wind */}
            <div className="col-span-12 lg:col-span-4 2xl:col-span-3">
              <div className="card">
                <h6 className="feature-name">Wind</h6>
                <div className="feature-main">
                  <img className="max-w-20" src={windIcon} alt="wind icon" />
                  <h3 className="feature-title">Rain</h3>
                  <span className="feature-name">Moderate Rain</span>
                </div>
              </div>
            </div>

            {/* Current Temperature */}
            <div className="col-span-12 lg:col-span-4 2xl:col-span-3">
              <div className="card">
                <h6 className="feature-name">Current Temperature</h6>
                <div className="feature-main">
                  <img
                    className="max-w-20"
                    src={temperatureIcon}
                    alt="temperature icon"
                  />
                  <h3 className="feature-title">246.43°C</h3>
                  <span className="feature-name">Feels Like 244°C</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
