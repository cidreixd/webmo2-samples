import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import {
  HashRouter as Router,
  Route,
  useLocation,
  withRouter,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'
import { store } from './redux'
import Rotate from './components/pages/Rotate'
import RotateBy from './components/pages/RotateBy'
import UDP from './components/pages/UDP'

function _ScrollToTop(props: any) {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return props.children
}
const ScrollToTop = withRouter(_ScrollToTop)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ScrollToTop>
        <Route exact path="/" component={App}></Route>
        <Route path="/rotate" component={Rotate}></Route>
        <Route path="/rotate_by" component={RotateBy}></Route>
        <Route path="/UDP" component={UDP}></Route>
      </ScrollToTop>
    </Router>
  </Provider>,
  document.getElementById('root')
)
