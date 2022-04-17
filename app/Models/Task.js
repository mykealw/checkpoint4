import { ProxyState } from "../AppState.js"


export class Task{
constructor(data){
    // debugger
    this.description = data.description
    this.id = data.id 
    this.completed = data.completed





}

    
    get Template(){
        return ` <li>
        <input class="form-check-input me-1 " type="checkbox" value="" aria-label="..." onclick="app.tasksController.flipBool('${this.id}')">
        <span class="${this.completed == true ? "text-decoration-line-through" : ''}">${this.description}</span><i
          class="mdi mdi-delete text-dark selectable on-hover" onclick="app.tasksController.deleteTask('${this.id}')"></i>
      </li>`

    }

    get CountTemplate(){
        return `<h3>${this.CompletedCount}/${this.TotalCount} </h3>`
    }

    get TotalCount(){
        let TotalCount = ProxyState.tasks.length
        return TotalCount
    }
    get CompletedCount(){
        let CompletedCount =0
       let cCount = ProxyState.tasks
for (let i = 0; i < cCount.length; i++) {
    if(cCount[i].completed == true){
        CompletedCount++

    }
}
           
return CompletedCount
       }

    }

