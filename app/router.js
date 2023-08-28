import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { QuestionsController } from "./controllers/QuestionsController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";


export const router = [
  {
    path: '',
    controller: QuestionsController,
    view: /*html*/`
    
    <section class="row justify-content-around">
      <div class="col-3 m-1 text-center">
        <button class="btn btn-info" onclick="app.QuestionsController.getQuestions('animals')">Animal Questions</button>
      </div>
      <div class="col-3 m-1 text-center">
        <button class="btn btn-info" onclick="app.QuestionsController.getQuestions('videoGames')">Video Game Questions</button>
      </div>
      <div class="col-3 m-1 text-center">
        <button class="btn btn-info" onclick="app.QuestionsController.getQuestions('vehicles')">Vehicles Questions</button>
      </div>
    </section>


    <div id="questions"></div>
    `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]