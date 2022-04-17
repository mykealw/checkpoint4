export class Quote{
    constructor(data){
this.quote = data.content
this.author = data.author


    }


get QTemplate(){
    return `          <h4>${this.quote}</h4>
    <h5 class="on-hover"> ${this.author}</h5>`
}


}