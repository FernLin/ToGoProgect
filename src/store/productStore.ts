import { observable } from 'mobx'

const productStore = observable({
  productList: [],
})

export default productStore
