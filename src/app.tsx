import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import "taro-ui/dist/style/index.scss";

import { storesContext } from './store'

import './app.scss'

const store = {
  storesContext
}

class App extends Component {
  // this.props.children 就是要渲染的页面
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
