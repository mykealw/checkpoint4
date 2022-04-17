import { ProxyState } from "../AppState.js";
import { Pop } from "../Utils/Pop.js";


function _drawClock(){
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let noon = "AM"
    
    if (hour >=12){
        noon = "PM"
        console.log(noon);
    }
    let clock = hour + ":" + min + " " + noon
    document.getElementById("clock").innerText = clock
}


export class ClockController {
    constructor(){
        // ProxyState.on("clock", _drawClock)
        _drawClock()
// console.log("hello from clocks");

setInterval(_drawClock, 10000);
    }


}