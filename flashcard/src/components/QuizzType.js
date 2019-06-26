import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faFont, faFileAlt, faDice} from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core'
//npm install --save-dev @fortawesome/fontawesome-free
//$ npm i --save @fortawesome/fontawesome-svg-core
// $ npm i --save @fortawesome/free-solid-svg-icons
// $ npm i --save @fortawesome/react-fontawesome
library.add(faDumbbell);
library.add(faFileAlt);
library.add(faFont);
library.add(faDice);
function QuizzType(props) {
    return(
        <div>
            <li className="col-sm-3 text-center">
                    <div className="nav-card" onClick={()=>{props.userChoice(props.quizzType)}}>
                        <FontAwesomeIcon icon={props.icon} size={props.size}/>
                        <span>{props.quizzType}</span>
                    </div>
                </li>
        </div>
    )
};

export default QuizzType;