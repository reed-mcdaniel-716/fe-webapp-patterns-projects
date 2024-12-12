/**
 * Design Patterns used:
 *   Mixin that will implement the Observer pattern
 */


export const observerMixin = { // Mixin w/ Observer
  // observers will be a set of functions
  observers: new Set(),
  addObserver(observer){
    this.observers.add(observer);
  },
  removeObserver(observer){
    this.observers.delete(observer);
  },
  nofify(){
    this.observers.forEach((observer) => observer());
  }
}
