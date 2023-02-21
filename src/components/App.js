import React from "react"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { AuthProvider } from "../contexts/AuthContext"

import Chats from "./Message"
import Login from "./Login"

function App() {
  return (
      <div style={{ fontFamily: 'Avenir' }}>
        <Router>
          <AuthProvider>
            <Switch>
              <Route path="/message" component={Chats} />
              <Route path="/" component={Login} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
  )
}

export default App
