import { ProxyState } from "../AppState.js";
import { Pop } from "../Utils/Pop.js";
import { tasksService } from "../Services/TasksService.js"

function _drawTasks() {
    let template = ''
    ProxyState.tasks.forEach(task => template += task.Template)
    document.getElementById("todo").innerHTML = template
}


export class TasksController {
    constructor() {
        // console.log("hello from tasks");
        this.getTasks()
        ProxyState.on("tasks", _drawTasks);
        _drawTasks()

    }

    async addTask() {
        try {
            window.event.preventDefault()
            const form = window.event.target
            let taskData = {
                description: form.todo.value,
                checked: false
            }
            // console.log(taskData, "there is taskData");
            await tasksService.addTask(taskData)
        }
        catch (error) {
            Pop.toast(error.message, "error")
            console.log(error);
        }
    }
    async getTasks() {
        try {
            await tasksService.getTasks()
        } catch (error) {
            Pop.toast(error.message, "error")
            console.log(error);
        }
    }

    async deleteTask(taskID){
        try {
            if(await Pop.confirm()){

                // const removedTask = 
                // console.log(taskID, "this taskID");
                await tasksService.deleteTask(taskID)
                Pop.toast("Task is delorted!", 'success')
            }
        }
        catch(error) {
            Pop.toast(error.message, "error");
            console.error(error);
        }
    }

    async flipBool(taskflip){
        try {
            // debugger
            await tasksService.flipBool(taskflip)
        } catch (error) {
            Pop.toast(error.message, "error");
            console.error(error);
        }
    }




}