import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import List from './List'
import Button from './Sorted'
import AddUser from './AddUser'

const App = () => {
    return (
      <Router>
        <div>
          <h1>Group Selector</h1>
          <div>
            <Route path="/" component={List} />
            <Route path="/" component={Button}/>
            <Route path="/" component={AddUser}/>
          </div>
        </div>
      </Router>
    )
}



export default App

