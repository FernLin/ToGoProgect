
// src/store/counter.ts
import { observable } from 'mobx'

const counterStore = observable({
  // observable state
  counter: 0,
  multiple: 2,

  // actions
  counterStore() {
    this.counter++
  },
  increment() {
    this.counter++
  },
  decrement() {
    this.counter--
  },
  incrementAsync() {
    setTimeout(() => {
      this.counter++
    }, 1000)
  },

  // computeds
  get result() {
    return this.counter * this.multiple
  }
})

export default counterStore
