/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import temperatureIcon from '../../../public/icon_tempareture.png';
const Temperature = ({ tempData }) => {

    const {temp_c , feelslike_c} = tempData;
    return (
        <div className="col-span-12 lg:col-span-4 2xl:col-span-3">
            <div className="card">
                <h6 className="feature-name">Current Temperature</h6>
                <div className="feature-main">
                    <img
                        className="max-w-20"
                        src={temperatureIcon}
                        alt="temperature icon"
                    />
                    <h3 className="feature-title">{temp_c}°C</h3>
                    <span className="feature-name">Feels Like {feelslike_c}°C</span>
                </div>
            </div>
        </div>
    );
};

export default Temperature;