import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'
import { store } from './redux'
import Rotate from './components/pages/Rotate'
import RotateBy from './components/pages/RotateBy'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={App}></Route>
      <Route path="/rotate" component={Rotate}></Route>
      <Route path="/rotate_by" component={RotateBy}></Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
