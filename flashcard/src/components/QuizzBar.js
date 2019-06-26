import React from 'react';

import QuizzType from './QuizzType'
//Font awesome


function QuizzBar(props){
    const quizzArray = [
        {icon : "dice",type : "Randome"},
        {icon : "file-alt",type : "Regular"},
        {icon : "dumbbell",type : "Weighted"},
        {icon : "font",type : "Multi"}
    ]

    const quizzTypes = quizzArray.map((qt, i)=>{
        return(
            <QuizzType key={i} icon={qt.icon} size="4x" quizzType={qt.type}  userChoice={props.userChoice}/>
        )
    })
    return (
        <div className="quizz-bar"> 
            <h1>Choose your study type</h1>
            <ul className="nav nav-pills nav-fill">
                {quizzTypes}
            </ul>
        </div>
    )
}

export default QuizzBar