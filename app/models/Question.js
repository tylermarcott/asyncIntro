

export class Question {
  constructor({ category, type, difficulty, question, correct_answer, incorrect_answers }) {
    this.category = category
    this.type = type
    this.difficulty = difficulty
    this.question = question
    this.correctAnswer = correct_answer
    this.incorrectAnswers = incorrect_answers || []
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
        <button class="col-5 btn btn-info m-1">${this.correctAnswer}</button>
        <button class="col-5 btn btn-info m-1">${this.incorrectAnswers[0]}</button>
        <button class="col-5 btn btn-info m-1">${this.incorrectAnswers[1]}</button>
        <button class="col-5 btn btn-info m-1">${this.incorrectAnswers[2]}</button>
      </div>

    </section>
    `

  }


}


