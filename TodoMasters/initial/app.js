/**
 * Design Patterns used:
 * 
 */

// because this file is now a module, we want to make certain things globally accessible across modules
// gloablThis allow us to put things in the global object, regardless of run env
globalThis.DOM = {}
const DOM = globalThis.DOM;

// this event fired when DOM is parsed in memory and ready to be used
document.addEventListener("DOMContentLoaded", () =>{
  DOM.todoList = document.getElementById("todo-list");
  DOM.addBtn = document.getElementById("add-btn");
  DOM.todoInput = document.getElementById("todo-input");

  DOM.addBtn.addEventListener("click", (event) =>{
    // TODO
  });
  DOM.todoList.addEventListener("click", (event) =>{
    if(event.target.classList.contains("delete-btn")){
      // TODO
    }
  });
});
