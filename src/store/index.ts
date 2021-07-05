import React from 'react'
import tabStore from './tabStore'
import counterStore from './counterStore'

export const storesContext = React.createContext({
  tabStore,
  counterStore
})
