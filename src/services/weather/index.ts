import { apiOpenWeather } from "@/services/index";

const apiToken = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

export const WeatherServices = {
    getWeatherByCityName: async (cityName: string) => {
        try {
            const query = `weather?q=${cityName}&appid=${apiToken}&lang=pt_br&units=metric`
            const result = await apiOpenWeather.get(query);

            return result.data;
        } catch (err) {
            console.error(err);
            throw new Error("Failed to fetch weather data");
        }
    }
};
