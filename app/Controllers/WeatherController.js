import { ProxyState } from "../AppState.js";
import { Pop } from "../Utils/Pop.js";
import{ weatherService} from "../Services/WeatherService.js"


function _drawWeather(){
    let weather = ProxyState.weather
    let celcius = (weather - 273.15).toFixed(1)
    document.getElementById("weatherC").innerText = celcius.toString()
    let faren = ((celcius * (9/5)+ 32)).toFixed(1)
    document.getElementById("weatherF").innerText = faren.toString()
}


export class WeatherController{
    constructor(){
        ProxyState.on("weather", _drawWeather);
        this.getWeather()
        _drawWeather()
        // console.log("hello from weather");
        
        
    }
    
    _flip(){
       let count = true
       if( count){
           document.getElementById("weatherC").classList.add("d-none")
           document.getElementById("weatherF").classList.remove("d-none")
           count = !count
       }else{
           document.getElementById("weatherC").classList.remove("d-none")
           document.getElementById("weatherF").classList.add("d-none")
           count = true
       }
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