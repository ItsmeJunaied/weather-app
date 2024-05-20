/* eslint-disable react/prop-types */
import windIcon from '../../../public/icon_wind.png';

const Wind = ({ windData }) => {

  const { wind_dir, wind_kph, wind_degree } = windData;

  return (
    <div className="col-span-12 lg:col-span-4 2xl:col-span-3">
      <div className="card">
        <h6 className="feature-name">Wind</h6>
        <div className="feature-main">
          <img className="max-w-20" src={windIcon} alt="wind icon" />
          <h3 className="feature-title text-lg">
            Direction - <span className='text-[#9EE2F8]'>{wind_dir}</span>
          </h3>
          <div className="text-sm lg:text-base text-[#CADEE8]">
            <div>
              <span>Degree: </span>
              <span className="text-white">{wind_degree}°</span>
            </div>
            <div>
              <span>Speed: </span>
              <span className="text-white">{wind_kph} kph</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wind;