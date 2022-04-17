import { ProxyState } from "../AppState.js";
import { sandboxApi } from "./SandboxApi.js";

class WeatherService{
 async   getWeather() {
      const res = await sandboxApi.get('weather')
      console.log(res.data.main.feels_like, "here is the weather");
  

    }




}


export const weatherService = new WeatherService();