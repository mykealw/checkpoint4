import { ProxyState } from "../AppState.js";
import { Quote } from "../Models/Quote.js";
import { sandboxApi } from "./SandboxApi.js";


class QuoteService{
    async getQuote() {
 const res = await sandboxApi.get('quotes/')
//  console.log(res, "here is the res");
 console.log(res.data.author, "here is the res.data.author");
//  debugger

    }




}

export const quoteService = new QuoteService();