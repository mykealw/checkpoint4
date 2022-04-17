import { ProxyState } from "../AppState.js";
import { Quote } from "../Models/Quote.js";
import { sandboxApi } from "./SandboxApi.js";


class QuoteService {
    //   async  getAuthor() {
    //         const res = await sandboxApi.get('quotes/')

    //     }
    async getQuote() {
        const res = await sandboxApi.get('quotes/')
        //  debugger
        console.log(res.data.content, "here is the res.data.content");
        ProxyState.quotes = res.data.content
        ProxyState.quotes = ProxyState.quotes
        console.log(res.data.author, "here is the res.data.author");
        ProxyState.author = res.data.author
        ProxyState.author = ProxyState.author
        // ProxyState.author = res.data.author
        // ProxyState.author = ProxyState.author
    }




}

export const quoteService = new QuoteService();