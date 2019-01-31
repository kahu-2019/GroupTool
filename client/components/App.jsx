import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import List from './List'
import Button from './Sorted'


const TestComp = () => {
  return (
    <div>
      <h1>testComp</h1>
    </div>
  )
}

const App = () => {
    return (
      <Router>
        <div>
          <h1>Group Selector</h1>
          <div>
            <Route path="/" component={List} />
            <Route path="/" component={Button}/>
          </div>
        </div>
      </Router>
    )
}

export default App

