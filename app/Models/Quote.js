export class Quote{
    constructor(data){
this.quote = data.content
this.author = data.author


    }


get QTemplate(){
    return `${this.author}`
}


}