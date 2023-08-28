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



// TODO: so basically what I need to do is have a way that when the corresponding button is clicked, it will send an identifying feature into my code that can place the right API url into the service.

//TODO: .sort() sorts randomly

export class QuestionsController {
  constructor() {
    console.log('controller stuff yo')

    // FIXME: constructor draw not working because no URL is initially passed in. Maybe let's just start with the animals question set because it's the first button

    this.getQuestions()
    AppState.on('questions', _drawQuestions)    //NOTE: So what this is saying is that every time there is a change in the questions array in our appstate, call drawQuestions. In this case this AppstateOn is or listener, and the emitter is at the bottom of our getQuestions function in services. Appstate.questions = newQuestions sets a new state to the questions array (in this case filling it with the data we receive from the API), and this change in turn acts as an emitter, which the above listener listens to. When this change happens, it calls our draw function.
  }

  async getQuestions(questionType) {

    let url = ''

    console.log(questionType)

    if (questionType == 'animals') {
      url = 'https://opentdb.com/api.php?amount=4&category=27&type=multiple'
    } else if (questionType == 'videoGames') {
      url = 'https://opentdb.com/api.php?amount=4&category=15'
    } else if (questionType == 'vehicles') {
      url = 'https://opentdb.com/api.php?amount=4&category=28'
    }

    console.log('url is:', url)

    await questionsService.getQuestions(url)
  }







}
