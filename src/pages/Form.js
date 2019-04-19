import React, { Component } from "react"
import FormRenderer from '../components/FormRenderer'

class Form extends Component {
  constructor() {
    super()
    this.state={     
    }
  }

  render() {
    const { title, questions } = this.props.formData
    return (
        <div className="container">
            <br/><br/>
            <div className="form-container">
                <br/><h4 className="text-center">{title}</h4>
                <hr/><br/>
                <FormRenderer questions={questions}/>
                <br/><br/>
            </div>
        </div>
    )
  }
}

Form.defaultProps = {
    formData: {
        "title": "This is a title for the form Header",
        "questions": [
          {
              "id": 2447,
              "question_type": "TextQuestion",
              "prompt": "What is your first answer?",
              "is_required": false,
              "min_char_length": 15
          },
          {
              "id": 2448,
              "question_type": "TextQuestion",
              "prompt": "What is your second answer?",
              "is_required": true,
              "min_char_length": 100
          },
          {
              "id": 2500,
              "question_type": "RadioQuestion",
              "prompt": "What is your third answer?",
              "choices": [{"label":"Buy an apple",value:"Apple"},{"label":"Buy a ball",value:"Ball"},{"label":"Buy a coat",value:"Coat"}],
              "is_required": true
          }
        ]
    }
}

export default Form