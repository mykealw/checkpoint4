import { ProxyState } from "../AppState.js";
import { Pop } from "../Utils/Pop.js";
import { quoteService } from "../Services/QuoteService.js"


function _drawQuotes() {
    let template = ProxyState.quotes.toString()
    document.getElementById("quote").innerText = template
    //    ProxyState.quotes.forEach(q => template += q.QTemplate)
    //    console.log(template, "here is template");
}

function _drawAuthor() {

    let template = ProxyState.author.toString()
    // debugger
    document.getElementById("author").innerText = template
    console.log(template, "here is template")
}
export class QuoteController {
    constructor() {
        this.getQuote()
        // this.getAuthor()
        ProxyState.on("quotes", _drawQuotes)
        ProxyState.on("author", _drawAuthor)
        //  _drawQuotes()
        // console.log("hello from quotes");

        // setInterval(_drawQuotes, 3000);

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
