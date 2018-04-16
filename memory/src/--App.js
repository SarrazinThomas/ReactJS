import React, { Component } from 'react'
import './CSS.css'
import LoginForm from './LoginForm'

class App extends Component {
  render() {
    return (
      <LoginForm fctClick={this.submitLogin}/>
    )
  }
  submitLogin(login) {
      if(login==='root')
        alert('Bienvenu Maitre !')
        else
          alert('Bienvenu '+login)
  
  }
}

export default App
