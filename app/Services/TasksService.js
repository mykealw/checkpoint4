
import { ProxyState } from "../AppState.js";
import {Task} from "../Models/Task.js";
import { sandboxApi } from "./SandboxApi.js";

class TasksService {
  async flipBool(taskflip) {
      let foundTask = ProxyState.tasks.find(t => t.id === taskflip)
      foundTask.completed = !foundTask.completed
        ProxyState.tasks = ProxyState.tasks.filter(t => t.id !== taskflip)
      const res = await sandboxApi.put('mykeal/todos/' + taskflip, foundTask )
      // console.log(res.data, "here is the res", taskflip, "here is task flip");
    //   const task = new Task(res.data)
    //   const index = ProxyState.tasks.findIndex(t => t.id == task.id)
    //   ProxyState.tasks.splice(index, 1, task)
    //   ProxyState.tasks = ProxyState.tasks
    this.getTasks()
     
   }
   async deleteTask(taskID) {
     await sandboxApi.delete('mykeal/todos/' + taskID)
    this.getTasks()
   }
   async getTasks() {
  const res = await sandboxApi.get('mykeal/todos')
//   console.log(res.data, "here is the res boss");
ProxyState.tasks = res.data.map(t => new Task(t))
// ProxyState.tasks = [...ProxyState.tasks, res.data]
   }
   async addTask(taskData) {
       let newTask = new Task(taskData)
    //    console.log(taskData, "2nd attempt");
       const res = await sandboxApi.post('mykeal/todos', newTask)
      //  console.log(res.data, "here is the res");
       res.data = new Task(res.data)
       ProxyState.tasks = [...ProxyState.tasks, res.data]
    }


}


export const tasksService = new TasksService();