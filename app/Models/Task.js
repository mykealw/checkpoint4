

export class Task{
constructor(data){
    // debugger
    this.description = data.description
    this.id = data.id 
    this.checked = data.checked





}

    
    get Template(){
        return ` <li>
        <input class="form-check-input me-1 " type="checkbox" value="" aria-label="..." onmousedown="">
        <span class=""${this.checked == true ? "text-decoration-line-through" : ''}"">${this.description}</span><i
          class="mdi mdi-delete text-dark selectable on-hover" onclick="app.tasksController.deleteTask('${this.id}')"></i>
      </li>`

    }
}