import React, {Component} from 'react';
import RegularCard from './RegularCard'
import RandomWeighted from './RandomWeightedCard'
import MultiCard from './MultiCard'
import axios from 'axios'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner} from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core'
library.add(faSpinner);

class FlashCard extends Component{
    constructor(){
        super();
        this.apiHostRoot = `https://aws-services.robertbunch.dev/services`;
        this.state= {
            flipClass : "",
            questionData : "",

        }
    }
    flip = (e)=>{
        let newFlip = this.state.flipClass == "" ? "flip" : "";
        this.setState({
            flipClass : newFlip
        })
    }

    newCard = ()=>{
        let path;
        path = this.apiHostRoot +'/all';
        const cardStyle = this.props.cardStyle;

        if ((cardStyle === "Random") || (cardStyle === "Regular"))
            path = this.apiHostRoot +'/all';
        else if(cardStyle === "Weighted")
            path = this.apiHostRoot +'/weighted';
        else
            path = this.apiHostRoot +'/multi';

        axios.get(path).then((res)=>{
            this.setState({
                questionData:res.data,
            })
            this.props.nowReady();
        })
    }

    componentDidMount = ()=>{
        //this.newCard();
    }

    render(){
        if (!this.props.ready)
        {
            this.newCard();
            return(
                <div>
                    <FontAwesomeIcon icon="spinner" size="6x" spin />
                </div>
            )
        }

        const cardStyle = this.props.cardStyle;
        let card;
        let questionData = this.state.questionData;
        if (cardStyle === 'Multi'){
            console.log(this.state.questionData)
            card = <MultiCard questionData={questionData}/>
        }else if (cardStyle === 'Regular'){
            card = <RegularCard questionData={questionData}/>
        }else if (cardStyle === 'Weighted'){
            card = <RandomWeighted questionData={questionData}/>
        }
        return(
            <div className="row align-items-center card-holder">
                <div className={`col-sm-6 offset-sm-3 card mb-3 ${this.state.flipClass}`} onClick={this.flip}>
                    {card}
                </div>
                <br/>
                <button onClick={this.newCard} className="btn btn-primary btn-lg">Next Question</button>
            </div>
        )
    }
}

export default FlashCard;