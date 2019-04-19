import React, { Component } from "react"
import { screenSize } from '../utils/screen'

const QuestionInput = ({type,setAnswer,answer,choices}) => {
    switch(type) {
        case 'TextQuestion':
            return (
                <textarea type="text" value={answer} onChange={setAnswer} className="center w-100" rows={(screenSize()==='md'||screenSize()==='lg')?5:3}/>
            )
        case 'RadioQuestion':
            return (
                <div>
                    {
                        choices.map((v,k)=>(
                            <div key={'radio-question-'+k}><input type="radio" value={v.value} onChange={setAnswer} checked={answer===v.value?true:false}/>&nbsp;<h6 className="ib">{v.label}</h6><br/></div>
                        ))
                    }
                </div>
            )
    }
}

export default QuestionInput