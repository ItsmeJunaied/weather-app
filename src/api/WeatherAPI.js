import axios from "axios";

const retriveWeatherData = async () => {
    const response = await axios.get("http://api.weatherapi.com/v1/current.json?key=617b6d309c82448ab2c123316242005&q=London");

    return response.data
}

export default retriveWeatherData;