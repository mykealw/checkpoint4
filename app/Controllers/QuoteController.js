import { ProxyState } from "../AppState.js";
import { Pop } from "../Utils/Pop.js";
import { quoteService} from "../Services/QuoteService.js"




export class QuoteController {
    constructor(){
        this.getQuote()
        // ProxyState.on("quote", this._drawQuotes);
        // ProxyState.on("author", this._drawQuotes)
        this._drawQuotes()
        // console.log("hello from quotes");
        
        
    }
    
    
    async getQuote(){
        try {
            await quoteService.getQuote()
        }
        catch(error) {
            Pop.toast(error.message, "error")
            console.log(error);
        }
    }
    async _drawQuotes(){
        debugger
        document.getElementById("quote").innerText = ProxyState.quotes.toString()
        document.getElementById("author").innerText = ProxyState.author.toString()
    }
        
    
}
