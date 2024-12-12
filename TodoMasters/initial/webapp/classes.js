/**
 * Design Patterns used:
 *   Value Object Pattern
 *   Singleton
 *   Mixin
 */

// need the file extension in vanilla JS (no builder of code)
import { observerMixin } from "./mixin.js";

class TodoItem {
  constructor(text){
    this.text = text;
  }

  equals(other) { // Value Object
    return this.text == other.text;
  }
}

class TodoList {
  // private field
  #data = new Set();

  // Singleton
  constructor() {
    // ensures that instance can be created only once by us using the "new" keyword
    if(TodoList.instance){
      throw new Error("Use Todolist.getIncance() to access the list");
    }
  }

  static instance = null;
  // static code is executed when class is parsed, only once
  static {
    this.instance = new TodoList();
  }

  static getInstance(){
    return this.instance;
  }

  // getter for private field
  get items() {
    return this.#data;
  }

  // list behavior
  
}

// applying Mixin
// in JS a class is actually a function, so we instead want to apply it to the prototype, which is an object
Object.assign(TodoList.prototype, observerMixin);
