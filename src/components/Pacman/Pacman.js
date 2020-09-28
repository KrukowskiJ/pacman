import React, { Component } from 'react';

import './style.css';
import { ReactComponent as PacmanSVG} from './pacman.svg';

class Pacman extends Component{

    state = {
        direction: 'right',
        position: {
            top:50,
            left:500
        }

    }


    render(){
        return(
            <div className="pacman" 
            style = {this.state.position}>
                 <PacmanSVG/>
            </div>
        );
    }
}

Pacman.defaultProps = {
    step: 50, //50px move
    size: 50,    // pacman size 50x50px
    //TODO: move to config
    border: 10 * 2,
    topScoreBoardHeight: 50
}

export default Pacman;