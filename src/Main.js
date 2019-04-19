import React, { Component } from "react"
import Form from './pages/Form'

class Main extends Component {
  constructor() {
    super()
  }
  
  render() {
    return (
        <div id="root">
            <Form/>
        </div>
      )
  }
}

export default Main