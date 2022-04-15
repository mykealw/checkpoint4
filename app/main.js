// import { ValuesController } from "./Controllers/ValuesController.js";
import { ClockController } from "./Controllers/ClockController.js";
import { TasksController } from "./Controllers/TasksController.js";
import { ImageController } from "./Controllers/ImageController.js";
import { WeatherController } from "./Controllers/WeatherController.js";
import { QuoteController } from "./Controllers/QuoteController.js";


class App {
  // valuesController = new ValuesController();
  clockController = new ClockController();
  tasksController = new TasksController();
  imageController = new ImageController();
  weatherController = new WeatherController();
  quoteController = new QuoteController();




}

window["app"] = new App();
