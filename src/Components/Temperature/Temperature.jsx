/* eslint-disable no-unused-vars */
import React from 'react';
import temperatureIcon from '../../../public/icon_tempareture.png';
const Temperature = () => {
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
                    <h3 className="feature-title">246.43°C</h3>
                    <span className="feature-name">Feels Like 244°C</span>
                </div>
            </div>
        </div>
    );
};

export default Temperature;