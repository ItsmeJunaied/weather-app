/* eslint-disable react/prop-types */
import linkIcon from '../../../public/link.svg';

const Loacation = ({ locationData }) => {

  const { country, name, localtime, region } = locationData;


  const formatLocalTime = (localtime) => {
    const date = new Date(localtime);
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    const timeString = date.toLocaleString('en-US', options);
    const dayOptions = { weekday: 'long' };
    const dateOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    const dayString = date.toLocaleDateString('en-US', dayOptions);
    const dateString = date.toLocaleDateString('en-US', dateOptions);

    return `${timeString} ${dayString}, ${dateString}`;
  };

  const formattedLocalTime = formatLocalTime(localtime);
  return (
    <div className="col-span-12 flex flex-col justify-end lg:col-span-8 2xl:col-span-9">
      <div>
        <div className="mb-2 flex items-center gap-2">
          <h2 className="text-3xl font-bold text-white lg:text-4xl 2xl:text-[40px]">
            {region}
          </h2>
          <div className="relative">
            <button>
              <img className="size-9" src={linkIcon} alt="link icon" />
            </button>
          </div>
        </div>
        <p className="text-lg text-[#C4C4C4] lg:text-xl">
          {country} | {name}
        </p>
        <div className="flex items-center gap-2 text-xs text-[#92B6F5] lg:text-sm">
          {formattedLocalTime}
        </div>
      </div>
    </div>
  );
};

export default Loacation;