

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
    
    <section class="container-fluid card">
      <div class="row">
        <h3 class="col-4">${this.category}</h3>
        <h3 class="col-4">${this.type}</h3>
        <h3 class="col-4">${this.difficulty}</h3>
      </div>
      <div class="row">
        <p class="col-6">${this.question}</p>
        <p class="col-6">${this.correctAnswer}</p>
      </div>
      <div class="row">
        <p>${this.incorrectAnswers}</p>
      </div>

    </section>
    `

  }


}


