import { ProxyState } from "../AppState.js";
import {Task} from "../Models/Task.js";
import { sandboxApi } from "./SandboxApi.js";

class TasksService {
   async deleteTask(taskID) {
     await sandboxApi.delete('mykeal/todos/' + taskID)

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
       console.log(res.data, "here is the res");
       res.data = new Task(res.data)
       ProxyState.tasks = [...ProxyState.tasks, res.data]
    }


}


export const tasksService = new TasksService();