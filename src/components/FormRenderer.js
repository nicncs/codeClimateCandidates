import React, { Component } from "react"
import QuestionInput from './QuestionInput'

const SuccessForm = ({questions,answers}) => {
    return (
        <div>
        {
            questions.map((v,k)=>(
                <div className="question-container" key={'q-'+k}>
                    <h4 className="text-center">{v.prompt}</h4>
                    <h4 className="text-center text-wrap">{answers[k]}</h4>
                </div>
            ))
        }
        </div>
    )
}

class FormRenderer extends Component {
  constructor() {
    super()
    this.state = {
        page: 0,
        answers: [],
        errMsg: ''
    }
  }
  setAnswer = e => {
    let answers = this.state.answers
    answers[this.state.page]=e.target.value
    this.setState({answers})
  }
  validateForm() {
      const { answers, page } = this.state
      const { questions } = this.props
      let res = {
        err: false,
        msg: ''
      }
      if (questions[page].question_type==='TextQuestion') {
        //length check
        if (answers[page]===undefined||(answers[page]&&answers[page].length<questions[page].min_char_length)) {
            res.err=true;res.msg=`Min ${questions[page].min_char_length} characters needed`
        }
      }

      if (questions[page].question_type==='RadioQuestion') {
        //value check
        if (answers[page]===undefined) {
            res.err=true;res.msg='Choose an item'
        }
      }
      return res
  }
  handlePageChange = action => {
    if (action!=='prev'&&this.props.questions[this.state.page].is_required) {
        let res = this.validateForm()
        if (!res.err) {
            this.setState({page:this.state.page+1,errMsg:''})
        }
        else {this.setState({errMsg:res.msg})}
    } else {
        action==='prev'?this.setState({page:this.state.page-1,errMsg:''}):this.setState({page:this.state.page+1,errMsg:''})
    }
  }
  render() {
    const { questions } = this.props
    const { page, answers, errMsg } = this.state
    return (
        <div className="container main-form">
            {page===questions.length?
                <SuccessForm questions={questions} answers={answers} />:
                [<h4 className="text-left">{questions[page].prompt}</h4>,<br/>,
                <QuestionInput type={questions[page].question_type} setAnswer={this.setAnswer} answer={answers[page]?answers[page]:''} choices={questions[page].choices?questions[page].choices:[]}/>,<br/>]
            }
            {errMsg?<h6 className="err-msg">{errMsg}</h6>:null}
            <div className="containter-fluid">
                <div className="button-container">
                    {page!==0?<div className="button fl" id="prev-btn" onClick={()=>this.handlePageChange('prev')}>Previous</div>:null}
                    {page<questions.length?<div className="button fr" id="next-btn" onClick={()=>this.handlePageChange('next')}>Next</div>:null}
                </div>
            </div>
        </div>
    )
  }
}

export default FormRenderer