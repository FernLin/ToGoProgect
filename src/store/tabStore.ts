import { observable } from 'mobx'

const tabStore = observable({
  // observable state
  tabIndex: 0,

  // actions
  changeTab(index: number) {
    this.tabIndex = index;
  },

  // computeds
  // get result() {
  //   return this.counter * this.multiple
  // }
})

export default tabStore
