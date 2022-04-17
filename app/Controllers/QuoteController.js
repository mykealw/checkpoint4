import { ProxyState } from "../AppState.js";
import { Pop } from "../Utils/Pop.js";
import { quoteService } from "../Services/QuoteService.js"


function _drawQuotes() {
    let template = ProxyState.quotes.toString()
    document.getElementById("quote").innerText = template
    let template2 = ProxyState.authors.toString()
    document.getElementById("author").innerText = template2
}

export class QuoteController {
    constructor() {
        // this.getAuthor()
        this.getQuote()
        // ProxyState.on("authors", _drawAuthor)
        ProxyState.on("quotes", _drawQuotes)
        ProxyState.on("authors", _drawQuotes)
        //  _drawQuotes()
        // console.log("hello from quotes");
        // _drawAuthor
        // setInterval(_drawAuthor, 3000);

    }



    async getQuote() {
        try {
            await quoteService.getQuote()
        }
        catch (error) {
            Pop.toast(error.message, "error")
            console.log(error);
        }
    }
    // async getAuthor(){
    //     try {
    //         await quoteService.getAuthor()
    //     }
    //     catch(error) {
    //         Pop.toast(error.message, "error")
    //         console.log(error);
    //     }
    // }


}
