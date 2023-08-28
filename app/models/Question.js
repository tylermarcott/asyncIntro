

export class Question {
  constructor({ category, type, difficulty, question, correct_answer, incorrect_answers }) {
    this.category = category
    this.type = type
    this.difficulty = difficulty
    this.question = question
    this.correctAnswer = correct_answer
    this.incorrectAnswers = incorrect_answers || []
    // this.allAnswers = answer[{ correct_answer }, { incorrect_answers }]  //NOTE: this won't work because the last passed argument is used up by this.incorrectAnswers. So basically it's trying to define it to nothing. Savannah's suggestion is to make a getter in my model.
  }


  // FIXME: this is not working, I can't even get the console logs from it
  get randomizeAnswers() {

    let answer = [this.correctAnswer, this.incorrectAnswers[0], this.incorrectAnswers[1], this.incorrectAnswers[2]]

    // console.log('before sort:', answer)

    let randomAnswers = answer.sort()

    // console.log('after sort:', answer)

    return randomAnswers
  }




  get QuestionsTemplate() {
    return `
    
    <section class="container-fluid question-card">
      <div class="row">
        <h3 class="col-4">Category: ${this.category}</h3>
        <h3 class="col-4">Question Type: ${this.type}</h3>
        <h3 class="col-4">Question Difficulty: ${this.difficulty}</h3>
      </div>
      <div class="row">
        <p class="col-6">
          <h3>Question: </h3>
        ${this.question}</p>
      </div>

      <div class="row justify-content-around">
        <button class="col-5 btn btn-info m-1">${this.randomizeAnswers[0]}</button>
        <button class="col-5 btn btn-info m-1">${this.randomizeAnswers[1]}</button>
        <button class="col-5 btn btn-info m-1">${this.randomizeAnswers[2]}</button>
        <button class="col-5 btn btn-info m-1">${this.randomizeAnswers[3]}</button>
      </div>

    </section>
    `

  }


}


