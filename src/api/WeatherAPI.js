import axios from "axios";

const retriveWeatherData = async (location) => {
    const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=617b6d309c82448ab2c123316242005&q=${location}&aqi=no`);

    return response.data
}

export default retriveWeatherData;