import axios from "axios";

const apiWeather = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/weather",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

const apiCountry = axios.create({
    baseURL: "https://countryflagsapi.com/png/",
    timeout: 5000,
});

const apiUnsplash = axios.create({
    baseURL: "https://source.unsplash.com/1600x900/?",
    timeout: 5000,
});

export { apiWeather, apiCountry, apiUnsplash };