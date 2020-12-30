import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'
import { store } from './redux'
import RotateContainer from './components/pages/Rotate'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={App}></Route>
      <Route path="/rotate" component={RotateContainer}></Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
