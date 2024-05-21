/* eslint-disable react/prop-types */
import airElementIcon from '../../../public/icon_air_element.png';

const AirPollutionQuality = ({ detailedWeatherData }) => {

  const {
    is_day,
    cloud,
    humidity,
    gust_kph,
    precip_mm,
    pressure_in,
    uv,
    vis_km
  } = detailedWeatherData;
  const isDayText = is_day ? 'Day' : 'Night';

  return (
    <div className="col-span-12 lg:col-span-4 2xl:col-span-4">
      <div className="card">
        <div className="mt-3 space-y-2 lg:space-y-3">

          <h6 className="feature-name">Weather Details</h6>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
              <img className="max-w-[18px]" src={airElementIcon} alt="icon" />
              Is Day
            </div>
            <span className="text-right text-sm text-white lg:text-base">
              {isDayText}
            </span>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
              <img className="max-w-[18px]" src={airElementIcon} alt="icon" />
              Cloud Coverage
            </div>
            <span className="text-right text-sm text-white lg:text-base">
              {cloud}%
            </span>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
              <img className="max-w-[18px]" src={airElementIcon} alt="icon" />
              Humidity
            </div>
            <span className="text-right text-sm text-white lg:text-base">
              {humidity}%
            </span>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
              <img className="max-w-[18px]" src={airElementIcon} alt="icon" />
              Gust Speed
            </div>
            <span className="text-right text-sm text-white lg:text-base">
              {gust_kph} kph
            </span>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
              <img className="max-w-[18px]" src={airElementIcon} alt="icon" />
              Precipitation
            </div>
            <span className="text-right text-sm text-white lg:text-base">
              {precip_mm} mm
            </span>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
              <img className="max-w-[18px]" src={airElementIcon} alt="icon" />
              Pressure
            </div>
            <span className="text-right text-sm text-white lg:text-base">
              {pressure_in} in
            </span>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
              <img className="max-w-[18px]" src={airElementIcon} alt="icon" />
              UV Index
            </div>
            <span className="text-right text-sm text-white lg:text-base">
              {uv}
            </span>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
              <img className="max-w-[18px]" src={airElementIcon} alt="icon" />
              Visibility
            </div>
            <span className="text-right text-sm text-white lg:text-base">
              {vis_km} km
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirPollutionQuality;