import React from "react"
import ReactDOM from "react-dom"
import { AppContainer } from "react-hot-loader"
import { Provider } from "react-redux"
import configureStore from "@/store"
import routers from "@/routers"
const store = configureStore()

const render = Component => {
  ReactDOM.render(
    <AppContainer key={Math.random()}>
      <Provider store={store}>{Component}</Provider>
    </AppContainer>,
    document.getElementById("app")
  ) 
}

render( routers )

if (module.hot) {
  module.hot.accept('./routers', () => {
    const newRoutes = require('./routers').default
    render( newRoutes )
  })
}
