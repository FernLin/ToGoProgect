import React from 'react'
import tabStore from './tabStore'
import productStore from './productStore'

export const storesContext = React.createContext({
  tabStore,
  productStore,
})
