import airElementIcon from '../../../public/icon_air_element.png';

const AirPollutionQuality = () => {
    return (
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
    );
};

export default AirPollutionQuality;