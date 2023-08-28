import { AppState } from "../AppState.js"
import { Question } from "../models/Question.js"

class QuestionsService {

  async getQuestions(url) {
    console.log('the passed url is:', url)

    const response = await fetch(url)
    const data = await response.json()    //NOTE: I think this converts the raw data from JSON?

    console.log(data) //this gives us an array filled with 4 class instances with our question objects inside.

    // NOTE: had to go into the console on my app, look at the console log of the fetched data. In there, you can see the data has 2 subcategories, response_code and results. So trying to just say data.map, you can't map an object like that. So the that we want is in our results. We need to do data.results.map to go to the proper subcategory
    let newQuestions = data.results.map(question => new Question(question))

    console.log('questions', newQuestions)

    AppState.questions = newQuestions   //this is our emitter for our Appstate.on('questions', _drawQuestions) in controller.
  }






}




export const questionsService = new QuestionsService()