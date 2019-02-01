import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import List from './List'
import Button from './Sorted'
import AddUser from './AddUser'

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
            <div>
              <Route path="/" component={List} />
            </div>
            <div>
              <Route path="/" component={Button}/>
            </div>
          </div>
       
        </div>
      </Router>
    )
}



export default App

