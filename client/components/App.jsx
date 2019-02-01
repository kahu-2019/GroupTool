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
        <div className = 'main'>
          <div className = 'subDivLeft'>
            <div>
              <div>
              <img className = 'logoImage' src='/images/devA.png'></img>
              </div>
              <div className = 'title'>
                Kahu Group Picker
              </div>
              
          </div>
        </div>
          <div className = 'subDivRight'>
            <div className = 'outline'>
            <Route path="/" component={List} />
            <Route path="/" component={Button}/>
            </div>
            <div>
                
            </div>
          </div>

        </div>
      </Router>
    )
}

export default App

