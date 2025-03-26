import axios from "axios";

const apiOpenWeather = axios.create({
    baseURL: process.env.NEXT_PUBLIC_OPENWEATHER_API_URL,
});

export { apiOpenWeather };