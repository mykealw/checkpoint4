import { ProxyState } from "../AppState.js";
import { Pop } from "../Utils/Pop.js";
import{ weatherService} from "../Services/WeatherService.js"


function _drawWeather(){
    document.getElementById("weather").innerText = ProxyState.weather.toString()
}

export class WeatherController{
    constructor(){
        // ProxyState.on("weather", _drawWeather);
        this.getWeather()
        // _drawWeather()
        // console.log("hello from weather");


    }

async getWeather(){
    try {
        await weatherService.getWeather()
    } catch (error) {
        Pop.toast(error.message, "error")
        console.log(error);
    }
}

}