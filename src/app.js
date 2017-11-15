import React from "react"
import { Provider } from "react-redux"

import configureStore from "@/store"
import routers from "@/routers"

const store = configureStore()

const App = () => {
  return <Provider store={store}>{routers}</Provider>
}

export default App
