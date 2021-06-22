import React from 'react'
import { storesContext } from '../store'

export const useStores = () => React.useContext(storesContext)
