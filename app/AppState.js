import { Question } from "./models/Question.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"


class ObservableAppState extends EventEmitter {



  // NOTE: have to set our incoming API data to type class Question, and create an array of questions.
  /** @type {Question[]} */
  questions = []




  /*
  API links:

    video game questions: https://opentdb.com/api.php?amount=4&category=15
  
    vehicle questions: https://opentdb.com/api.php?amount=4&category=28
  
  */





  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])

  // NOTE Used to load initial data
  init() {

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
