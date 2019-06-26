import React, {Component} from 'react';

class FlashCard extends Component{
    render(){
        
        const question = this.props.questionData
        return(
            <div>
                <div className="card-back">
                    {question.service}
                </div>
                <div className="card-front">
                    <div>{question.desc}</div>
                    <div>{question.cat}</div>
                </div>
            </div>
        )
    }
}

export default FlashCard;