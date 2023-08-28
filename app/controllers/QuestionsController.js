import { AppState } from "../AppState.js"
import { questionsService } from "../services/QuestionsService.js"
import { setHTML } from "../utils/Writer.js"


function _drawQuestions() {
  console.log('drawing my questions')

  let content = ''

  let questions = AppState.questions

  questions.forEach(q => content += q.QuestionsTemplate)

  setHTML('questions', content)
}



export class QuestionsController {
  constructor() {
    console.log('controller stuff yo')
    this.getQuestions()
    AppState.on('questions', _drawQuestions)    //NOTE: So what this is saying is that every time there is a change in the questions array in our appstate, call drawQuestions. In this case this AppstateOn is or listener, and the emitter is at the bottom of our getQuestions function in services. Appstate.questions = newQuestions sets a new state to the questions array (in this case filling it with the data we receive from the API), and this change in turn acts as an emitter, which the above listener listens to. When this change happens, it calls our draw function.
  }

  async getQuestions() {
    await questionsService.getQuestions()
  }







}
