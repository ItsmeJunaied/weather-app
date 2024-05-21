/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react';

const Forecast = ({ forecastData }) => {


    // console.log(forecastData.forecastday)
    const forecastHourData = forecastData.forecastday.map(item => (item.hour));
    // console.log(forecastHourData);
    const hourData = forecastHourData.map(item => (item.map(forecast => forecast)))

    console.log(forecastHourData);
    return (
        <div className="col-span-12 lg:col-span-4 2xl:col-span-5 h-[400px]">
            <div className="card overflow-y-scroll">
                <div className="mt-3 space-y-2 lg:space-y-3">
                    <h6 className="feature-name">Forecast Details</h6>
                    <div className='grid grid-cols-5 gap-2'>
                        <div className='text-center'>Time</div>
                        <div className='text-center'>Icon</div>
                        <div className='text-center'>Temperature</div>
                        <div className='text-center'>Feels</div>
                        <div className='text-center'>Wind</div>
                    </div>
                    {hourData.flat().map((time, index) => (
                        <div key={index} className='grid grid-cols-5 gap-2'>
                            <div className='text-center'>{time.time.split(' ')[1]}</div>
                            <div className='text-center'><img src={time.condition.icon} alt="icon" /></div>
                            <div className='text-center'>{time.temp_c}°C</div>
                            <div className='text-center'>{time.feelslike_c}°C</div>
                            <div className='text-center'>{time.wind_dir}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Forecast;